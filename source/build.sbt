name := "Chords"

version := "0.1"

scalaVersion := "2.13.2"
enablePlugins(ScalaJSPlugin)

// This is an application with a main method
scalaJSUseMainModuleInitializer := true

libraryDependencies ++= Seq(
  "com.raquo" %%% "laminar" % "0.9.1",
  "org.scalatest" %%% "scalatest" % "3.1.2" % "test"
)