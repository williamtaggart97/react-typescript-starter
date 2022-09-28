type GitObject = any; // A Git object is one particular instance of my codebase

interface User {
    name: string;
    id: number;
    phoneNumber?: string;
}

interface Repository {
    name: string;
    createdBy: User;
    branches: Branch[];
    commits: Commit[];
}

interface Branch {
    name: string;
    currentState: Commit;
}

interface Commit {
    hash: string;
    code: GitObject; // this represents the entire current state of this repo (not going into how complicated this gets today)
}

interface GithubAppState {
    currentUser: User;
    repos: Repository[];
}

/*

BREAKOUT EXERCISE: 

Goals
Step 1: Create some example data. Using the interfaces above create an array of 5 Users, 2 Repositories
    - remember that you will need to create the branches and commits (use the interfaces as a guide)

Step 2: Write a function that takes returns a GithubAppState object -- be sure to correctly type the function 
    - this is practice on typing functions, not interacting with databases so you should be able to use the example data you created in step 1

Step 3: Create an interface called PullRequest - use your best judgement

Step 4: Create a function that "creates" and returns PullRequest object 
    - Again, there is no need to worry too much about the implementation, focus on correctly defining the parameter and return types 

    */