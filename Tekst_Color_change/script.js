function changenColorAndTekst(tekst, color, height) {
    document.getElementById('tekstDiv').innerHTML = /*html*/`
        <div style="background:${color}; height: ${height}px; ">${tekst}</div>
    `;
}

