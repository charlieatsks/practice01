const addBtn = document.querySelector("addBtn");
const main = document.querySelector("#main");

const saveNotes = () => {
    const notes = document.querySelectorAll(".note text area");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value);
        }
    )
    //console.log(data);
    localStorage.setItem("notes", JSON.stringify(data));
}
addBtn.addEventListener(
    "click", 
    function() {
        addNote();
    }
)


const addNote = () => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML
}













