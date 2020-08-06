var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fetchNodesByName = (name) => __awaiter(this, void 0, void 0, function* () {
    // await figma.loadFontAsync({ family: "Clarkson", style: "Medium" });
    yield figma.loadFontAsync({ family: "Clarkson", style: "BookProduct" });
    // console.log("loaded font");
    // const textNode = figma.root.findOne((n) => n.name === name);
    // Find all nodes
    const nodes = figma.currentPage.findAll((n) => n.name === name);
    // Replace each nodes string
    nodes.map((n) => (n.characters = replaceDateInStr(n.characters)));
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
    if (str.includes("Jan")) {
        const newStr = replaceStr(splitStr, splitStr.indexOf("Jan"));
        return newStr;
    }
    else if (str.includes("Feb")) {
        const newStr = replaceStr(splitStr, splitStr.indexOf("Feb"));
        return newStr;
    }
    else if (str.includes("Mar")) {
        const newStr = replaceStr(splitStr, splitStr.indexOf("Mar"));
        return newStr;
    }
    else if (str.includes("Apr")) {
        const newStr = replaceStr(splitStr, splitStr.indexOf("Apr"));
        return newStr;
    }
    else if (str.includes("May")) {
        const newStr = replaceStr(splitStr, splitStr.indexOf("May"));
        return newStr;
    }
    else if (str.includes("Jun")) {
        const newStr = replaceStr(splitStr, splitStr.indexOf("Jun"));
        return newStr;
    }
    else if (str.includes("Jul")) {
        const newStr = replaceStr(splitStr, splitStr.indexOf("Jul"));
        return newStr;
    }
    else if (str.includes("Aug")) {
        const newStr = replaceStr(splitStr, splitStr.indexOf("Aug"));
        return newStr;
    }
    else if (str.includes("Sep")) {
        const newStr = replaceStr(splitStr, splitStr.indexOf("Sep"));
        return newStr;
    }
    else if (str.includes("Oct")) {
        const newStr = replaceStr(splitStr, splitStr.indexOf("Oct"));
        return newStr;
    }
    else if (str.includes("Nov")) {
        const newStr = replaceStr(splitStr, splitStr.indexOf("Nov"));
        return newStr;
    }
    else if (str.includes("Dec")) {
        const newStr = replaceStr(splitStr, splitStr.indexOf("Dec"));
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
fetchNodesByName("Date (Live)");
// fetchNodeByName("Date Renews");
// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();
