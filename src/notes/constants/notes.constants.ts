export const NOTE_MESSAGES = {
	ERRORS: {
		NOT_FOUND: "Note with this ID not found"
	},
	SUCCESS: {
		DELETED: "Note deleted successfully"
	}
};


export enum NoteCategory {
	Idea = 'Idea',
	Task = 'Task',
	RandomThought = 'Random Thought',
}

export const dateRegex = /\d{1,2}\/\d{1,2}\/\d{4}/g;
