const flatpickr = require("flatpickr");
import flatpickr from "flatpickr";


flatpickr("#fechanacimiento", {
dateFormat: "D-m-y",
altinput:true,
altFortmat:"j F Y",
mode: "single",
minDate:"03-08-1923",
maxDate: new Date().fp_incr(-1),
}
)