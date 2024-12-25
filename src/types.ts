export interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    category: string;
    priority: 'Low' | 'Medium' | 'High';
  }
  
  export type TaskContextType = {
    tasks: Task[];
    addTask: (task: Omit<Task, 'id'>) => void;
    editTask: (task: Task) => void;
    deleteTask: (id: string) => void;
    toggleComplete: (id: string) => void;
  };
  
  