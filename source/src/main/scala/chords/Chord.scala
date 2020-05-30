package chords

import com.raquo.laminar.api.L._

case class Chord(rootNote: String,
  triad: (String, IndexedSeq[String]),
  tetrad: (String, IndexedSeq[String])
)

object Chord {
  def apply(rootNote: String, chordNames: (String, String), notes: IndexedSeq[String]): Chord = {
    Chord(rootNote, (chordNames._1, notes.take(3)), (chordNames._2, notes))
  }

  def toHtml(chords: IndexedSeq[Chord]) =
    table(
      chords.map(c =>
        Seq(
          tr(
            td(c.rootNote), td(c.triad._1),
            td(c.triad._2.mkString(", "))
          ),
          tr(
            td(c.rootNote), td(c.tetrad._1),
            td(c.tetrad._2.mkString(", "))
          )
        )
      )
    )
}
