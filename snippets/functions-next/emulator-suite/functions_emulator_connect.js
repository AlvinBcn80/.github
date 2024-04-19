// This snippet file was generated by processing the source file:
// ./functions-next/emulator-suite.js
//
// To make edits to the snippets in this file, please edit the source

// [START functions_emulator_connect_modular]
import { getApp } from "firebase/app";
import { getFunctions, useFunctionsEmulator } from "firebase/functions";

const functions = getFunctions(getApp());
useFunctionsEmulator(functions, "localhost", 5001);
// [END functions_emulator_connect_modular]