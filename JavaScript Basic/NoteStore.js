console.log(`\n*******Note Store*******`)

class NotesStore {
    constructor() {
        this.completed = []
        this.active = []
        this.others = []
    }
    addNotes(state, name) {
        if (name == '' || name == undefined) {
            throw new Error('Name cannot be empty')
        } else {
            if (state == 'active') {
                this.active.push(name);
            } else if (state == 'completed') {
                this.completed.push(name);
            } else if (state == 'others') {
                this.other.push(name);
            } else {
                throw new Error(`Invalid state ${state}`);
            }
        }
    }
    getNotes(state) {
        if (state == 'active') {
            return this.active;
        } else if (state == 'completed') {
            return this.completed;
        } else if (state == 'others') {
            return this.other;
        } else {
            throw new Error(`Invalid state ${state}`);
        }
    }
}
try {
    var Note = new NotesStore;

    // test1
    Note.addNotes('active', 'DrinkTea');
    Note.addNotes('active', 'DrinkCoffee');
    Note.addNotes('completed', 'Study');
    console.log(Note.getNotes('active'))
    console.log(Note.getNotes('completed'))
    console.log(Note.getNotes('foo'))
} catch (e) {
    console.log(e);
}