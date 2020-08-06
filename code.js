var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fetchNodeByName = (name) => __awaiter(this, void 0, void 0, function* () {
    // await figma.loadFontAsync({ family: "Clarkson", style: "Medium" });
    yield figma.loadFontAsync({ family: "Clarkson", style: "BookProduct" });
    console.log("loaded font");
    const textNode = figma.root.findOne((n) => n.name === name);
    textNode.characters = replaceDateInStr(textNode.characters);
});
const newDate = () => {
    let today = new Date();
    // Add 10 days to today's date
    today.setDate(today.getDate() + 10);
    const splitDate = today.toDateString().split(" ");
    // Format date
    return splitDate[1] + " " + splitDate[2] + ", " + splitDate[3];
};
const replaceDateInStr = (str) => {
    let splitStr = str.match(/\w+|\s+|[^\s\w]+/g);
    // Check for presence of month, get position in array
    // months.map((m) => hasDate(splitStr, m));
    if (str.includes("Jan") ||
        str.includes("Feb") ||
        str.includes("Mar") ||
        str.includes("Apr") ||
        str.includes("May") ||
        str.includes("Jun") ||
        str.includes("Jul") ||
        str.includes("Aug") ||
        str.includes("Sep") ||
        str.includes("Oct") ||
        str.includes("Nov") ||
        str.includes("Dec")) {
        const newStr = replaceStr(splitStr, splitStr.indexOf("Jul"));
        console.log("New string:", newStr);
        return newStr;
    }
    else {
        console.log("No month in string");
        return str;
    }
};
const replaceStr = (str, index) => {
    // console.log("Split str", str);
    // Get strings before and after date
    let preString = str.slice(0, index).join("");
    let postString = str.slice(index + 6).join("");
    let date = newDate();
    // Rebuild string with new date
    return preString + date + postString;
};
fetchNodeByName("Date Expires");
fetchNodeByName("Date Renews");
// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();
