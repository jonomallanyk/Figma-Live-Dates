const fetchNodesByName = async () => {
  // await figma.loadFontAsync({ family: "Clarkson", style: "Medium" });
  await figma.loadFontAsync({ family: "Clarkson", style: "BookProduct" });

  // Find all nodes
  const nodes = figma.currentPage.findAll((n) => n.name.includes("@Date"));

  // nodes.map((n) => console.log(n.characters, n.textDecoration));

  // Replace each nodes string
  nodes.map(
    (n) =>
      (n.characters = replaceDateInStr(
        n.characters,
        getArgumentFromStr(n.name)
      ))
  );

  // Let the user know how many dates have been updated
  figma.notify(nodes.length + " dates have been updated");
};

// Receives a string like @Date(arg), returns arg as an Int
const getArgumentFromStr = (str: string) => {
  let splitStr = str.split("");

  // @ D a t e ( 1 0 )
  // Check to see in an argument was provided
  if (splitStr[6] == ")") {
    return 0;
  } else {
    // Drop characters up to and including the opening parentheses
    let dropStart = str.slice(6);
    // Drop closing parentheses
    let dropEnd = dropStart.slice(0, -1);

    return parseInt(dropEnd, 10);
  }
};

const replaceDateInStr = (str: string, daysAhead: number) => {
  let splitStr = str.match(/\w+|\s+|[^\s\w]+/g);

  // Check for location of date in string
  // TODO: Replace this with something non-brittle. I had issues with a mapping function that made this redundant.
  if (str.includes("Jan")) {
    return replaceStr(splitStr, splitStr.indexOf("Jan"), daysAhead);
  } else if (str.includes("Feb")) {
    return replaceStr(splitStr, splitStr.indexOf("Feb"), daysAhead);
  } else if (str.includes("Mar")) {
    return replaceStr(splitStr, splitStr.indexOf("Mar"), daysAhead);
  } else if (str.includes("Apr")) {
    return replaceStr(splitStr, splitStr.indexOf("Apr"), daysAhead);
  } else if (str.includes("May")) {
    return replaceStr(splitStr, splitStr.indexOf("May"), daysAhead);
  } else if (str.includes("Jun")) {
    return replaceStr(splitStr, splitStr.indexOf("Jun"), daysAhead);
  } else if (str.includes("Jul")) {
    return replaceStr(splitStr, splitStr.indexOf("Jul"), daysAhead);
  } else if (str.includes("Aug")) {
    return replaceStr(splitStr, splitStr.indexOf("Aug"), daysAhead);
  } else if (str.includes("Sep")) {
    return replaceStr(splitStr, splitStr.indexOf("Sep"), daysAhead);
  } else if (str.includes("Oct")) {
    return replaceStr(splitStr, splitStr.indexOf("Oct"), daysAhead);
  } else if (str.includes("Nov")) {
    return replaceStr(splitStr, splitStr.indexOf("Nov"), daysAhead);
  } else if (str.includes("Dec")) {
    return replaceStr(splitStr, splitStr.indexOf("Dec"), daysAhead);
  } else {
    console.log("No month in string");

    return str;
  }
};

const replaceStr = (
  str: Array<string>,
  monthPositionInList: number,
  daysAhead: number
) => {
  // Get strings before and after date
  let preString = str.slice(0, monthPositionInList).join("");
  let postString = str.slice(monthPositionInList + 6).join("");

  let date = newDate(new Date(), daysAhead);

  // Rebuild string with new date
  return preString + date + postString;
};

const newDate = (today, daysAhead: number) => {
  // If day starts with 0, drop it.
  const formatDay = (day) => {
    if (day.startsWith("0")) {
      return day.slice(1);
    } else {
      return day;
    }
  };

  // Add (daysAhead) days to today's date. Returns Day Mmm DD, YYYY
  today.setDate(today.getDate() + daysAhead);

  // Split string into [Day, Month, Dd, Year]
  const splitDate = today.toDateString().split(" ");

  const month = splitDate[1];
  const day = formatDay(splitDate[2]);
  const year = splitDate[3];

  // Format date to Mmm (D)D, YYYY
  return month + " " + day + ", " + year;
};

fetchNodesByName();

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();

// module.exports = {
//   getArgumentFromStr: getArgumentFromStr,
//   newDate: newDate,
// };
