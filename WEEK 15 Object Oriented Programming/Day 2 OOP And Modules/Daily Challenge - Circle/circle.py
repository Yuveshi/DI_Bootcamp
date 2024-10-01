import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter must be provided")

    @property
    def diameter(self):
        return self.radius * 2

    @property
    def area(self):
        return math.pi * (self.radius ** 2)

    def __str__(self):
        return f'Circle(radius={self.radius}, diameter={self.diameter})'

    def __add__(self, other):
        if isinstance(other, Circle):
            new_radius = self.radius + other.radius
            return Circle(radius=new_radius)
        raise TypeError("Can only add Circle instances")

    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        raise TypeError("Comparison must be between Circle instances")

    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        raise TypeError("Comparison must be between Circle instances")

# Test the Circle class
if __name__ == "__main__":
    circle1 = Circle(radius=3)
    circle2 = Circle(diameter=10)

    print(circle1)  # Circle(radius=3, diameter=6)
    print(circle2)  # Circle(radius=5.0, diameter=10.0)

    print(f"Area of circle1: {circle1.area}")  # Area of circle1: 28.274333882308138
    print(f"Area of circle2: {circle2.area}")  # Area of circle2: 78.53981633974483

    circle3 = circle1 + circle2
    print(circle3)  # Circle(radius=8.0, diameter=16.0)

    print(circle1 < circle2)  # True
    print(circle1 == circle2)  # False

    # Creating a list of circles and sorting them
    circles = [circle1, circle2, circle3]
    sorted_circles = sorted(circles)
    for circle in sorted_circles:
        print(circle)  # Output the sorted circles

import turtle

def draw_circle(circle):
    turtle.circle(circle.radius * 20)  # Scale the radius for visualization
    turtle.penup()
    turtle.right(90)
    turtle.forward(circle.diameter * 20)  # Move down for the next circle
    turtle.pendown()
    turtle.left(90)

# Draw sorted circles using Turtle
turtle.speed(0)  # Fastest drawing
for circle in sorted_circles:
    draw_circle(circle)

turtle.done()
