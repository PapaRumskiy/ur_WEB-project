export const trains = [
  {
    id: 't1',
    trainNumber: '701К',
    fromCity: 'Київ',
    toCity: 'Львів',
    departureTime: '06:20',
    arrivalTime: '12:05',
    duration: '5 год 45 хв',
    wagons: [
      {
        wagonNumber: '1',
        type: 'Купе',
        seats: [
          { seatNumber: '1', isBooked: false },
          { seatNumber: '2', isBooked: true },
          { seatNumber: '3', isBooked: false },
          { seatNumber: '4', isBooked: false },
          { seatNumber: '5', isBooked: true },
          { seatNumber: '6', isBooked: false }
        ]
      },
      {
        wagonNumber: '2',
        type: 'Плацкарт',
        seats: [
          { seatNumber: '7', isBooked: false },
          { seatNumber: '8', isBooked: false },
          { seatNumber: '9', isBooked: true },
          { seatNumber: '10', isBooked: false },
          { seatNumber: '11', isBooked: false },
          { seatNumber: '12', isBooked: false }
        ]
      },
      {
        wagonNumber: '3',
        type: 'Інтерсіті',
        seats: [
          { seatNumber: '13', isBooked: false },
          { seatNumber: '14', isBooked: false },
          { seatNumber: '15', isBooked: false },
          { seatNumber: '16', isBooked: false },
          { seatNumber: '17', isBooked: true },
          { seatNumber: '18', isBooked: false }
        ]
      }
    ]
  },
  {
    id: 't2',
    trainNumber: '803П',
    fromCity: 'Одеса',
    toCity: 'Харків',
    departureTime: '08:15',
    arrivalTime: '18:40',
    duration: '10 год 25 хв',
    wagons: [
      {
        wagonNumber: '1',
        type: 'Плацкарт',
        seats: [
          { seatNumber: '1', isBooked: false },
          { seatNumber: '2', isBooked: true },
          { seatNumber: '3', isBooked: false },
          { seatNumber: '4', isBooked: false },
          { seatNumber: '5', isBooked: false },
          { seatNumber: '6', isBooked: false }
        ]
      },
      {
        wagonNumber: '2',
        type: 'Купе',
        seats: [
          { seatNumber: '7', isBooked: false },
          { seatNumber: '8', isBooked: true },
          { seatNumber: '9', isBooked: false },
          { seatNumber: '10', isBooked: false },
          { seatNumber: '11', isBooked: false },
          { seatNumber: '12', isBooked: false }
        ]
      },
      {
        wagonNumber: '3',
        type: 'Плацкарт',
        seats: [
          { seatNumber: '13', isBooked: false },
          { seatNumber: '14', isBooked: false },
          { seatNumber: '15', isBooked: false },
          { seatNumber: '16', isBooked: false },
          { seatNumber: '17', isBooked: true },
          { seatNumber: '18', isBooked: false }
        ]
      }
    ]
  },
  {
    id: 't3',
    trainNumber: '121М',
    fromCity: 'Дніпро',
    toCity: 'Київ',
    departureTime: '09:50',
    arrivalTime: '14:30',
    duration: '4 год 40 хв',
    wagons: [
      {
        wagonNumber: '1',
        type: 'Купе',
        seats: [
          { seatNumber: '1', isBooked: false },
          { seatNumber: '2', isBooked: false },
          { seatNumber: '3', isBooked: false },
          { seatNumber: '4', isBooked: true },
          { seatNumber: '5', isBooked: false },
          { seatNumber: '6', isBooked: false }
        ]
      },
      {
        wagonNumber: '2',
        type: 'Інтерсіті',
        seats: [
          { seatNumber: '7', isBooked: false },
          { seatNumber: '8', isBooked: false },
          { seatNumber: '9', isBooked: true },
          { seatNumber: '10', isBooked: false },
          { seatNumber: '11', isBooked: false },
          { seatNumber: '12', isBooked: false }
        ]
      },
      {
        wagonNumber: '3',
        type: 'Плацкарт',
        seats: [
          { seatNumber: '13', isBooked: false },
          { seatNumber: '14', isBooked: false },
          { seatNumber: '15', isBooked: false },
          { seatNumber: '16', isBooked: false },
          { seatNumber: '17', isBooked: false },
          { seatNumber: '18', isBooked: true }
        ]
      }
    ]
  },
  {
    id: 't4',
    trainNumber: '198Н',
    fromCity: 'Львів',
    toCity: 'Івано-Франківськ',
    departureTime: '07:35',
    arrivalTime: '10:20',
    duration: '2 год 45 хв',
    wagons: [
      {
        wagonNumber: '1',
        type: 'Плацкарт',
        seats: [
          { seatNumber: '1', isBooked: false },
          { seatNumber: '2', isBooked: false },
          { seatNumber: '3', isBooked: true },
          { seatNumber: '4', isBooked: false },
          { seatNumber: '5', isBooked: false },
          { seatNumber: '6', isBooked: false }
        ]
      },
      {
        wagonNumber: '2',
        type: 'Купе',
        seats: [
          { seatNumber: '7', isBooked: false },
          { seatNumber: '8', isBooked: false },
          { seatNumber: '9', isBooked: false },
          { seatNumber: '10', isBooked: true },
          { seatNumber: '11', isBooked: false },
          { seatNumber: '12', isBooked: false }
        ]
      }
    ]
  },
  {
    id: 't5',
    trainNumber: '455К',
    fromCity: 'Запоріжжя',
    toCity: 'Львів',
    departureTime: '11:00',
    arrivalTime: '15:40',
    duration: '4 год 40 хв',
    wagons: [
      {
        wagonNumber: '1',
        type: 'Інтерсіті',
        seats: [
          { seatNumber: '1', isBooked: false },
          { seatNumber: '2', isBooked: false },
          { seatNumber: '3', isBooked: false },
          { seatNumber: '4', isBooked: false },
          { seatNumber: '5', isBooked: true },
          { seatNumber: '6', isBooked: false }
        ]
      },
      {
        wagonNumber: '2',
        type: 'Плацкарт',
        seats: [
          { seatNumber: '7', isBooked: false },
          { seatNumber: '8', isBooked: false },
          { seatNumber: '9', isBooked: false },
          { seatNumber: '10', isBooked: false },
          { seatNumber: '11', isBooked: false },
          { seatNumber: '12', isBooked: false }
        ]
      }
    ]
  },
  {
    id: 't6',
    trainNumber: '256Л',
    fromCity: 'Харків',
    toCity: 'Одеса',
    departureTime: '13:20',
    arrivalTime: '23:00',
    duration: '9 год 40 хв',
    wagons: [
      {
        wagonNumber: '1',
        type: 'Купе',
        seats: [
          { seatNumber: '1', isBooked: true },
          { seatNumber: '2', isBooked: false },
          { seatNumber: '3', isBooked: false },
          { seatNumber: '4', isBooked: false },
          { seatNumber: '5', isBooked: false },
          { seatNumber: '6', isBooked: false }
        ]
      },
      {
        wagonNumber: '2',
        type: 'Плацкарт',
        seats: [
          { seatNumber: '7', isBooked: false },
          { seatNumber: '8', isBooked: false },
          { seatNumber: '9', isBooked: true },
          { seatNumber: '10', isBooked: false },
          { seatNumber: '11', isBooked: false },
          { seatNumber: '12', isBooked: false }
        ]
      }
    ]
  },
  {
    id: 't7',
    trainNumber: '312П',
    fromCity: 'Київ',
    toCity: 'Одеса',
    departureTime: '16:10',
    arrivalTime: '22:55',
    duration: '6 год 45 хв',
    wagons: [
      {
        wagonNumber: '1',
        type: 'Інтерсіті',
        seats: [
          { seatNumber: '1', isBooked: false },
          { seatNumber: '2', isBooked: false },
          { seatNumber: '3', isBooked: false },
          { seatNumber: '4', isBooked: false },
          { seatNumber: '5', isBooked: false },
          { seatNumber: '6', isBooked: true }
        ]
      },
      {
        wagonNumber: '2',
        type: 'Плацкарт',
        seats: [
          { seatNumber: '7', isBooked: false },
          { seatNumber: '8', isBooked: false },
          { seatNumber: '9', isBooked: false },
          { seatNumber: '10', isBooked: false },
          { seatNumber: '11', isBooked: false },
          { seatNumber: '12', isBooked: false }
        ]
      }
    ]
  },
  {
    id: 't8',
    trainNumber: '520Н',
    fromCity: 'Львів',
    toCity: 'Київ',
    departureTime: '18:05',
    arrivalTime: '23:50',
    duration: '5 год 45 хв',
    wagons: [
      {
        wagonNumber: '1',
        type: 'Плацкарт',
        seats: [
          { seatNumber: '1', isBooked: false },
          { seatNumber: '2', isBooked: true },
          { seatNumber: '3', isBooked: false },
          { seatNumber: '4', isBooked: false },
          { seatNumber: '5', isBooked: false },
          { seatNumber: '6', isBooked: false }
        ]
      },
      {
        wagonNumber: '2',
        type: 'Купе',
        seats: [
          { seatNumber: '7', isBooked: false },
          { seatNumber: '8', isBooked: false },
          { seatNumber: '9', isBooked: false },
          { seatNumber: '10', isBooked: false },
          { seatNumber: '11', isBooked: true },
          { seatNumber: '12', isBooked: false }
        ]
      }
    ]
  }
];
