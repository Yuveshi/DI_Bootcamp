const data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
     {
      name: 'Cuty',
      age: 5,
      type: 'rabbit'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Rex',
      age: 10,
      type: 'dog'
    },
  ];
 
  let sum = 0
  for (let item of data){
    if (item.type === 'dog') {
       sum += item.age
    }
  }
  console.log(sum)
 
  console.log(data.reduce((acc, cur) => {
    if (cur.type === 'dog') {
       return acc + cur.age
    }
    return acc
  }, 0))