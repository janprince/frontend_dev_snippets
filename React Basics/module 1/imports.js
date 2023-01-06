// Just like when exporting modules in JavaScript, there are several ways to import them.
// The exact syntax depends on how the module was exported.

import addTw from "./default_exports";                         // when exported as default
import { addThree } from "./named_export";                      // when named exports were used.

console.log(addTw(4, 5));