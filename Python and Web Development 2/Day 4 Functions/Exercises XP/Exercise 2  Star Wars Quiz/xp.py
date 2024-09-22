# Array of dictionaries with questions and answers
data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

# Function to ask questions and track answers
def take_quiz(data):
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers = []
    
    # Loop through the list of questions
    for item in data:
        print(item["question"])
        user_answer = input("Your answer: ").strip()

        if user_answer.lower() == item["answer"].lower():
            correct_answers += 1
            print("Correct!\n")
        else:
            incorrect_answers += 1
            print(f"Incorrect! The correct answer is {item['answer']}.\n")
            # Store the wrong answers with user's response and correct answer
            wrong_answers.append({
                "question": item["question"],
                "your_answer": user_answer,
                "correct_answer": item["answer"]
            })

    return correct_answers, incorrect_answers, wrong_answers

# Function to display the user's quiz results
def display_results(correct, incorrect, wrong_answers):
    print(f"You got {correct} correct and {incorrect} incorrect answers.")

    if incorrect > 0:
        print("\nHere are the questions you got wrong:")
        for wrong in wrong_answers:
            print(f"Question: {wrong['question']}")
            print(f"Your answer: {wrong['your_answer']}")
            print(f"Correct answer: {wrong['correct_answer']}\n")

    # If user got more than 3 wrong answers, ask them to play again
    if incorrect > 3:
        print("You had more than 3 wrong answers. Would you like to try again? (yes/no)")
        play_again = input().strip().lower()
        if play_again == 'yes':
            start_quiz()

# Function to start the quiz
def start_quiz():
    correct, incorrect, wrong_answers = take_quiz(data)
    display_results(correct, incorrect, wrong_answers)

# Start the quiz
start_quiz()
