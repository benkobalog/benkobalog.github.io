package chords

import chords.ScaleNotes.{modes, nextMode, nextNote, notes}
import com.raquo.airstream.eventbus.WriteBus
import com.raquo.laminar.api.L._
import org.scalajs.dom
import org.scalajs.dom.raw.KeyboardEvent

object Main {

  import KeyPressCodes._

  private var currentRootNote = "C"
  private var currentMode = "Major"
  private val rootNoteBus = new EventBus[String]
  private val modeBus = new EventBus[String]
  private val rootNoteEvents = rootNoteBus.events.map { newRootNote =>
    currentRootNote = newRootNote
    newRootNote
  }
  private val modeEvents = modeBus.events.map { newMode =>
    currentMode = newMode
    newMode
  }

  def main(args: Array[String]): Unit = {
    val inputEvents = rootNoteEvents.combineWith(modeEvents)

    def radio(
      radioName: String,
      radioValue: String,
      eventBus: EventBus[String],
      rChecked: Boolean,
    ) = {
      input(typ := "radio",
        idAttr := radioValue,
        name := radioName,
        value := radioValue,
        checked := rChecked,
        inContext { thisNode =>
          thisNode.ref.blur()
          onChange.mapTo(thisNode.ref.checked).collect { case c if c => radioValue } --> eventBus
        }
      )
    }

    def rootNoteRadioButtons = {
      div(
        notes.flatMap { note =>
          val checked = note == currentRootNote
          IndexedSeq(br(), radio("root-note", note, rootNoteBus, checked), label(note))
        }
      )
    }

    def modeRadioButtons = {
      div(
        table(
          tr(modes.map(mode => td(label(mode)))),
          tr(
            modes.map { mode =>
              val checked = mode == currentMode
              td(radio("mode", mode, modeBus, checked))
            }
          )
        )
      )
    }

    val appDiv: Div = div(
      h1("Chords and Scales"),
      table(
        tr(th("Root note"), th("Mode")),
        tr(
          td(rootNoteRadioButtons),
          td(modeRadioButtons)
        )
      ),
      div(drawScale(inputEvents)),
      div(drawChords(inputEvents)),
    )
    render(dom.document.querySelector("#appContainer"), appDiv)
    WriteBus.emit(modeBus.writer -> "Major", rootNoteBus.writer -> "C")
    dom.document.addEventListener("keydown", handleKeyPresses, useCapture = true)
  }

  def handleKeyPresses(event: KeyboardEvent): Unit = {
    def setChecked(nextValue: String, eventBus: EventBus[String]): Unit = {
      // If the other radio button group is focused this prevents cycling it
      event.preventDefault()
      dom.document.getElementById(nextValue).asInstanceOf[dom.html.Input].checked = true
      WriteBus.emit(eventBus.writer -> nextValue)
    }

    event.keyCode match {
      case Up => setChecked(nextNote(currentRootNote, false), rootNoteBus)
      case Down => setChecked(nextNote(currentRootNote, true), rootNoteBus)
      case Right => setChecked(nextMode(currentMode, true), modeBus)
      case Left => setChecked(nextMode(currentMode, false), modeBus)
      case _ =>
    }
  }

  def drawScale(inputStream: EventStream[(String, String)]): Div =
    div(
      "Scale: ",
      child.text <-- inputStream.map { case (note, mode) => ScaleNotes.scale(note, mode) },
      br(),
      "Pattern: ",
      child.text <-- inputStream.map { case (_, mode) => ScaleNotes.scalePatternWH(mode) },
    )

  def drawChords(inputStream: EventStream[(String, String)]): Div =
    div(
      "Chords: ",
      child <-- inputStream.map { case (note, mode) => Chord.toHtml(ScaleNotes.chords(note, mode)) }
    )
}
