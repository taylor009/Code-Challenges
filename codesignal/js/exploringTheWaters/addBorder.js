function addBorder(picture) {
    let charLength = picture[0].length;
    let border = "**";
    for(let i = 0; i < charLength; i++) {
        border += "*";
    }
    for(let i = 0; i < picture.length; i++){
        picture[i] = "*"+picture[i]+"*";
    }
    picture.unshift(border);
    picture.push(border);

    return picture;
}
