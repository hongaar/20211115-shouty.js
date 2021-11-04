import { setWorldConstructor } from "@cucumber/cucumber"

function CustomWorld() {}

setWorldConstructor(CustomWorld)
