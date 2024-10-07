function abbrevName(name) {
    let abbrev = "";
    for (let names of name.split(" ")) {
        if (abbrev == "") {
            abbrev = abbrev + names + " "
        } else {
            abbrev = abbrev + names.slice(0, 1) + ". "
        }
    }
    return abbrev;
}
