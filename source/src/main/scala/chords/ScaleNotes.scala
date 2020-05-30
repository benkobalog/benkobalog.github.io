package chords

object ScaleNotes {

  val notes = IndexedSeq("C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B")

  def nextNote(note: String, up: Boolean): String =
    (notes.indexOf(note), up) match {
      case (idx, true) if idx == 11 => "C"
      case (idx, true) => notes(idx + 1)
      case (idx, false) if idx == 0 => "B"
      case (idx, false) => notes(idx - 1)
    }

  private val cScalePattern = Vector(2, 2, 1, 2, 2, 2, 1)

  val modes = IndexedSeq("Major", "Dorian", "Phrygian", "Lydian", "Mixolydian", "Minor", "Locrian")

  def nextMode(mode: String, up: Boolean): String =
    (modes.indexOf(mode), up) match {
      case (idx, true) if idx == 6 => "Major"
      case (idx, true) => modes(idx + 1)
      case (idx, false) if idx == 0 => "Locrian"
      case (idx, false) => modes(idx - 1)
    }

  private def scalePattern(mode: String): Vector[Int] = {
    val (start, end) = cScalePattern.splitAt(modes.indexOf(mode))
    end ++ start
  }

  def scalePatternWH(mode: String): String =
    scalePattern(mode).map(x => if (x == 2) "W" else "H").mkString(", ")

  private def notesInScale(rootNote: String, mode: String): Vector[String] = {
    val rootNoteIdx = notes.indexOf(rootNote)
    val noteIndexes = scalePattern(mode).foldLeft(Vector(rootNoteIdx)) { (acc, cur) => acc :+ (cur + acc.last) % 12 }
    noteIndexes.map(notes)
  }

  def scale(rootNote: String, mode: String): String =
    notesInScale(rootNote, mode).mkString(", ")


  private def getIntervals(idx: Int, pattern: Vector[Int]): Vector[Int] =
    (pattern ++ pattern).slice(idx, idx + 6).grouped(2).map(_.sum).toVector

  private def getChordNames(idx: Int, pattern: Vector[Int]) = {
    getIntervals(idx, pattern) match {
      case Vector(4, 3, 4) => ("Major", "Major 7th")
      case Vector(3, 4, 3) => ("Minor", "Minor 7th")
      case Vector(4, 3, 3) => ("Major", "Dominant 7th")
      case Vector(3, 3, 4) => ("Diminished", "Half Diminished 7th")
    }
  }

  def chords(rootNote: String, mode: String) = {
    for {
      baseNoteIdx <- 0 to 6
      currentPattern = scalePattern(mode)
      chordsIndexes = (0 to 7 by 2).map(idx => (baseNoteIdx + idx) % 7)
      currentNotes = notesInScale(rootNote, mode)
      chordNotes = chordsIndexes.map(currentNotes)
    } yield Chord(currentNotes(baseNoteIdx), getChordNames(baseNoteIdx, currentPattern), chordNotes)
  }
}
