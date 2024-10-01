import requests
import time

def measure_load_time(url):
    start_time = time.time()  # Record the start time
    try:
        response = requests.get(url)  # Make a GET request to the URL
        response.raise_for_status()  # Raise an error for bad responses
    except requests.exceptions.RequestException as e:
        return None, f"An error occurred: {e}"  # Return None for load_time and the error message
    end_time = time.time()  # Record the end time
    load_time = end_time - start_time  # Calculate the load time
    return load_time, None  # Return load_time and None for the error message

if __name__ == "__main__":
    websites = [
        "https://www.google.com",
        "https://www.ynet.co.il",
        "https://www.imdb.com",
    ]

    for site in websites:
        load_time, error_message = measure_load_time(site)
        
        if error_message:
            print(f"Load time for {site}: {error_message}")
        else:
            print(f"Load time for {site}: {load_time:.2f} seconds")
