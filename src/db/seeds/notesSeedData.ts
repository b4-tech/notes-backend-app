import { NoteCategory } from '../../notes/constants/notes.constants'

export const notesSeedData = [
  {
    name: 'Book',
    category: NoteCategory.Task,
    dates: ['3/5/2021', '5/5/2021'],
    content:
      'I’m gonna have a dentist appointment on the 3/5/2023, I moved it from 5/5/2023',
    isArchived: false,
  },
  {
    name: 'Buy a new phone',
    category: NoteCategory.Task,
    dates: [],
    content: 'I’m gonna buy a new cat, I’m thinking about a black one',
    isArchived: false,
  },
  {
    name: 'New Year’s resolution',
    category: NoteCategory.Idea,
    dates: [],
    content: 'I’m gonna find a new job, and hope i will like it',
    isArchived: false,
  },
  {
    name: 'My favorite movie',
    category: NoteCategory.RandomThought,
    dates: [],
    content: 'My favorite movie is “The Lord of the Rings”',
    isArchived: false,
  },
  {
    name: 'Read a book',
    category: NoteCategory.Task,
    dates: [],
    content:
      'I’m gonna read a book, I’m thinking about Taras Bulba, I heard it’s a good one',
    isArchived: true,
  },
  {
    name: "Don't forget to buy milk",
    category: NoteCategory.Task,
    dates: ['3/5/2021'],
    content: 'I’m gonna buy milk on the 11/5/2023',
    isArchived: true,
  },
  {
    name: 'New project',
    category: NoteCategory.Task,
    dates: [],
    content: 'I’m gonna do planche hold, I’m thinking about 15 seconds',
    isArchived: false,
  },
];
