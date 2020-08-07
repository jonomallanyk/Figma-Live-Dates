const fetchNodesByName = async () => {
  // await figma.loadFontAsync({ family: "Clarkson", style: "Medium" });
  await figma.loadFontAsync({ family: "Clarkson", style: "BookProduct" });

  // Find all nodes
  const nodes = figma.currentPage.findAll((n) => n.name.includes("LiveDate"));

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

const getArgumentFromStr = (str) => {
  let splitStr = str.split("");

  if (splitStr[9] == ")") {
    return 0;
  } else {
    let dropStart = str.slice(9);
    let dropEnd = dropStart.slice(0, -1);

    let arg = parseInt(dropEnd, 10);

    return arg;
  }
};

const newDate = (daysAhead) => {
  let today = new Date();

  // If day starts with 0, drop it.
  const formatDay = (day) => {
    if (day.startsWith("0")) {
      return day.slice(1);
    } else {
      return day;
    }
  };

  // Add (daysAhead) days to today's date
  today.setDate(today.getDate() + daysAhead);

  const splitDate = today.toDateString().split(" ");
  const month = splitDate[1];
  const day = formatDay(splitDate[2]);
  const year = splitDate[3];

  // Format date to Mmm (D)D, YYYY
  return month + " " + day + ", " + year;
};

const replaceDateInStr = (str, daysAhead) => {
  let splitStr = str.match(/\w+|\s+|[^\s\w]+/g);

  // TODO: Replace this with something non-brittle. I had issues with a mapping function that made this redundant.
  if (str.includes("Jan")) {
    const newStr = replaceStr(splitStr, splitStr.indexOf("Jan"), daysAhead);

    return newStr;
  } else if (str.includes("Feb")) {
    const newStr = replaceStr(splitStr, splitStr.indexOf("Feb"), daysAhead);

    return newStr;
  } else if (str.includes("Mar")) {
    const newStr = replaceStr(splitStr, splitStr.indexOf("Mar"), daysAhead);

    return newStr;
  } else if (str.includes("Apr")) {
    const newStr = replaceStr(splitStr, splitStr.indexOf("Apr"), daysAhead);

    return newStr;
  } else if (str.includes("May")) {
    const newStr = replaceStr(splitStr, splitStr.indexOf("May"), daysAhead);

    return newStr;
  } else if (str.includes("Jun")) {
    const newStr = replaceStr(splitStr, splitStr.indexOf("Jun"), daysAhead);

    return newStr;
  } else if (str.includes("Jul")) {
    const newStr = replaceStr(splitStr, splitStr.indexOf("Jul"), daysAhead);

    return newStr;
  } else if (str.includes("Aug")) {
    const newStr = replaceStr(splitStr, splitStr.indexOf("Aug"), daysAhead);

    return newStr;
  } else if (str.includes("Sep")) {
    const newStr = replaceStr(splitStr, splitStr.indexOf("Sep"), daysAhead);

    return newStr;
  } else if (str.includes("Oct")) {
    const newStr = replaceStr(splitStr, splitStr.indexOf("Oct"), daysAhead);

    return newStr;
  } else if (str.includes("Nov")) {
    const newStr = replaceStr(splitStr, splitStr.indexOf("Nov"), daysAhead);

    return newStr;
  } else if (str.includes("Dec")) {
    const newStr = replaceStr(splitStr, splitStr.indexOf("Dec"), daysAhead);

    return newStr;
  } else {
    console.log("No month in string");

    return str;
  }
};

const replaceStr = (str: Array<String>, index, daysAhead) => {
  // Get strings before and after date
  let preString = str.slice(0, index).join("");
  let postString = str.slice(index + 6).join("");

  let date = newDate(daysAhead);

  // Rebuild string with new date
  return preString + date + postString;
};

fetchNodesByName();

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();
