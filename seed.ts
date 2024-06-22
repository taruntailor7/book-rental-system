import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const books = [
  {
    title: 'Learning Python',
    price: 45.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51xOBxZcbqL._SX379_BO1,204,203,200_.jpg',
    description: 'An in-depth introduction to the core Python language.',
  },
  {
    title: 'JavaScript: The Good Parts',
    price: 29.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg',
    description: 'A detailed guide to the best features of JavaScript.',
  },
  {
    title: 'Effective Java',
    price: 54.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/81ojszIIG4L.jpg',
    description: 'A guide to best practices in Java programming.',
  },
  {
    title: 'Automate the Boring Stuff with Python',
    price: 39.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/71xa6qSHfVL.jpg',
    description: 'Practical programming for total beginners using Python.',
  },
  {
    title: 'Introduction to Data Science',
    price: 59.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg',
    description: 'A comprehensive guide to the field of data science.',
  },
  {
    title: "You Don't Know JS: Scope & Closures",
    price: 25.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/81V73k2sQ5L.jpg',
    description: 'An in-depth look at the core mechanisms of JavaScript.',
  },
  {
    title: 'Fluent Python',
    price: 64.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/91mwqMwmCQL.jpg',
    description: 'Clear, concise, and effective programming in Python.',
  },
  {
    title: 'Clean Code',
    price: 49.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/81RjAg8p34L.jpg',
    description: 'A handbook of agile software craftsmanship.',
  },
  {
    title: 'Java: The Complete Reference',
    price: 69.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/71y5PtlbIBL.jpg',
    description: 'Comprehensive coverage of the Java programming language.',
  },
  {
    title: 'Python Crash Course',
    price: 44.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/81m1s4wIPML.jpg',
    description: 'A fast-paced, no-nonsense guide to programming in Python.',
  },
  {
    title: 'Head First JavaScript Programming',
    price: 39.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg',
    description: 'A brain-friendly guide to learning JavaScript.',
  },
  {
    title: 'R for Data Science',
    price: 49.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/91bZd4Ry1-L.jpg',
    description: 'Import, tidy, transform, visualize, and model data in R.',
  },
  {
    title: 'Effective Python',
    price: 57.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/91p8A9O2u3L.jpg',
    description: '59 specific ways to write better Python.',
  },
  {
    title: 'The Pragmatic Programmer',
    price: 59.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41uPjEenkFL.jpg',
    description: 'Your journey to mastery in software development.',
  },
  {
    title: 'Eloquent JavaScript',
    price: 44.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51uFVRHThTL.jpg',
    description: 'A modern introduction to JavaScript.',
  },
  {
    title: 'Data Science from Scratch',
    price: 64.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/71vcPWTNH3L.jpg',
    description: 'First principles with Python.',
  },
  {
    title: 'JavaScript & JQuery: Interactive Front-End Web Development',
    price: 49.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51GzYr7E9hL.jpg',
    description: 'A detailed guide to modern web development.',
  },
  {
    title: 'Pro Python',
    price: 59.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/91-c6g05yuL.jpg',
    description: 'Master the features of Python.',
  },
  {
    title: 'Python Data Science Handbook',
    price: 69.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg',
    description: 'Essential tools for working with data in Python.',
  },
  {
    title: 'Java Performance: The Definitive Guide',
    price: 64.99,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/91lwJA6Uh0L.jpg',
    description: 'Getting the most out of your code in Java.',
  },
];

async function main() {
  for (const book of books) {
    await prisma.book.create({
      data: book,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
