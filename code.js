// This plugin creates 5 rectangles on the screen.
// const numberOfRectangles = 5;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs such as the network by creating a UI which contains
// a full browser environment (see documentation).
// const nodes: SceneNode[] = [];
// for (let i = 0; i < numberOfRectangles; i++) {
//   const rect = figma.createRectangle();
//   rect.x = i * 150;
//   rect.fills = [{ type: "SOLID", color: { r: 1, g: 0.5, b: 0 } }];
//   figma.currentPage.appendChild(rect);
//   nodes.push(rect);
// }
// figma.currentPage.selection = nodes;
// figma.viewport.scrollAndZoomIntoView(nodes);
// await figma.loadFontAsync({ family: "Clarkson", style: "Medium" });
// await figma.loadFontAsync({ family: "Clarkson", style: "BookProduct" });
const node = figma.currentPage.selection[0];
// const dateNodes = node.findOne(async (node) => {
//   await figma.loadFontAsync({ family: "Clarkson", style: "Medium" });
//   await figma.loadFontAsync({ family: "Clarkson", style: "BookProduct" });
//   node.characters === "Website expires on Jul 4, 2020. Subscribe";
//   setDate(node);
//   // console.log(node);
// });
// const loadFonts = async () => {
//   await figma.loadFontAsync({ family: "Clarkson", style: "Medium" });
//   await figma.loadFontAsync({ family: "Clarkson", style: "BookProduct" });
// };
// loadFonts();
const fetchNodeByName = (name) => __awaiter(this, void 0, void 0, function* () {
    // await figma.loadFontAsync({ family: "Clarkson", style: "Medium" });
    yield figma.loadFontAsync({ family: "Clarkson", style: "BookProduct" });
    console.log("loaded font");
    const textNode = figma.root.findOne((n) => n.name === name);
    switch (name) {
        case "Date Expires":
            textNode.characters = "Website expires on Aug 15, 2020. Subscribe";
            break;
        case "Date Renews":
            textNode.characters = "Website renews on Aug 15, 2020";
            break;
        default:
            console.log("No matching layers");
    }
    console.log("Updated node string:", textNode.characters);
});
fetchNodeByName("Date Expires");
fetchNodeByName("Date Renews");
// fetchNodeByName("Website expires on Jul 4, 2020. Subscribe");
// const setDate = () => {
//   // "Aug 15, 2020"
//   "Website expires on Aug 15, 2020. Subscribe";
// };
// const setDate = (node) => {
//   node.characters = "Replacement Date";
// };
// console.log("Got selection", node);
// console.log("Got date nodes", dateNodes);
// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();
