export interface User {
  id: number;
  username: string;
  profilePicUrl: string;
}

export interface Comment {
  id: number;
  user: string;
  text: string;
}

export interface Post {
  id: number;
  user: User;
  post: {
    text: string;
    movieTitle: string;
    moviePosterUrl: string;
  };
  likes: number;
  comments: Comment[];
  timestamp: string;
}

export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  rating: number;
  year: number;
  genre: string[];
  mood: string[];
  director: string;
  description: string;
}

export interface Collection {
  id: number;
  title: string;
  description: string;
  movies: Movie[];
  coverImage: string;
}

export const feedPosts: Post[] = [
  {
    id: 1,
    user: {
      id: 101,
      username: "FilmFanatic",
      profilePicUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=100&h=100&fit=crop&crop=face"
    },
    post: {
      text: "Just watched 'Dune' again! The visuals are absolutely stunning. Hans Zimmer's score gives me chills every time. Can't wait for Part Two! 🏜️",
      movieTitle: "Dune",
      moviePosterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dune_%282021_film%29.jpg/250px-Dune_%282021_film%29.jpg"
    },
    likes: 25,
    comments: [
      { id: 1001, user: "SciFiGeek", text: "The soundtrack is next level! IMAX was incredible." },
      { id: 1002, user: "SpaceNerd", text: "Did you notice all the hidden details in the costume design?" }
    ],
    timestamp: "2 hours ago"
  },
  {
    id: 2,
    user: {
      id: 102,
      username: "ReelReviewer",
      profilePicUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=100&h=100&fit=crop&crop=face"
    },
    post: {
      text: "Finally saw 'Parasite'! The twists and turns kept me on the edge of my seat. Bong Joon-ho's direction is masterful. An absolute cinematic masterpiece. 🏆",
      movieTitle: "Parasite",
      moviePosterUrl: "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg"
    },
    likes: 40,
    comments: [
      { id: 1003, user: "CinemaLover", text: "Bong Joon-ho is a genius! The symbolism is incredible." }
    ],
    timestamp: "5 hours ago"
  },
  {
    id: 3,
    user: {
      id: 103,
      username: "MovieBuff92",
      profilePicUrl: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=100&h=100&fit=crop&crop=face"
    },
    post: {
      text: "Rewatching 'The Matrix' for the 10th time and still discovering new details. The philosophical depth never gets old. Red pill or blue pill? 💊",
      movieTitle: "The Matrix",
      moviePosterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/The_Matrix.png/250px-The_Matrix.png"
    },
    likes: 32,
    comments: [
      { id: 1004, user: "PhilosoFan", text: "The cave allegory references are mind-blowing!" },
      { id: 1005, user: "ActionJunkie", text: "Those fight scenes still hold up today." },
      { id: 1006, user: "Megharaj", text: "I love the philosophical themes in this movie." }
    ],
    timestamp: "1 day ago"
  }
];

export const movies: Movie[] = [
  {
  id: 1,
  title: "Brahmāstra: Part One – Shiva",
  posterUrl: "https://upload.wikimedia.org/wikipedia/en/e/ea/Brahmastra_Part_One_Shiva.jpg",
  rating: 6.6,
  year: 2022,
  genre: ["Fantasy", "Adventure", "Romance"],
  mood: ["epic", "mythical", "visual"],
  director: "Ayan Mukerji",
  description: "A modern-day mythological fantasy about astras and destiny."
},
{
  id: 2,
  title: "Gully Boy",
  posterUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXMTEyIl9h8AArp8w2MeZgvE5rUb29r__fuy01fXDs_KfTpDGbsTz05TpVd2PyyfdbQnvPM1FC8duupkk7k-74PwXhQyxO-G2VkmmtsGdEK5OnYiRISFmG-FwsdxNLc8PuKQku/s1600/blog+-+2.jpg",
  rating: 8.0,
  year: 2019,
  genre: ["Drama", "Music"],
  mood: ["inspiring", "realistic", "emotional"],
  director: "Zoya Akhtar",
  description: "A street rapper’s journey from the slums of Mumbai to fame."
},
{
  id: 3,
  title: "3 Idiots",
  posterUrl: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
  rating: 8.4,
  year: 2009,
  genre: ["Comedy", "Drama"],
  mood: ["uplifting", "thought-provoking", "funny"],
  director: "Rajkumar Hirani",
  description: "A story of friendship and breaking stereotypes in education."
},
{
  id: 4,
  title: "Tumbbad",
  posterUrl: "https://seekred.com/wp-content/uploads/2018/10/tumbad-poster-07.jpg",
  rating: 8.2,
  year: 2018,
  genre: ["Fantasy", "Horror", "Drama"],
  mood: ["dark", "mythical", "intense"],
  director: "Rahi Anil Barve",
  description: "A haunting tale rooted in Indian folklore about greed and a hidden treasure."
},
{
  id: 5,
  title: "Dil Chahta Hai",
  posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Dil_Chahta_Hai.jpg/250px-Dil_Chahta_Hai.jpg",
  rating: 8.1,
  year: 2001,
  genre: ["Drama", "Comedy", "Romance"],
  mood: ["youthful", "emotional", "fun"],
  director: "Farhan Akhtar",
  description: "A story of friendship, love, and self-discovery."
},
{
  id: 6,
  title: "Lagaan",
  posterUrl: "https://upload.wikimedia.org/wikipedia/en/b/b6/Lagaan.jpg",
  rating: 8.1,
  year: 2001,
  genre: ["Drama", "Sports", "Historical"],
  mood: ["epic", "inspiring", "emotional"],
  director: "Ashutosh Gowariker",
  description: "Villagers challenge British rulers to a cricket match to avoid taxes."
},
{
  id: 7,
  title: "Spider-Man: No Way Home",
  posterUrl: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg",
  rating: 8.2,
  year: 2021,
  genre: ["Action", "Adventure", "Superhero"],
  mood: ["exciting", "emotional", "multiverse"],
  director: "Jon Watts",
  description: "Spider-Man seeks help from Doctor Strange, opening the multiverse of villains."
},
{
  id: 8,
  title: "Avengers: Endgame",
  posterUrl: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  rating: 8.4,
  year: 2019,
  genre: ["Action", "Adventure", "Superhero"],
  mood: ["epic", "emotional", "heroic"],
  director: "Anthony and Joe Russo",
  description: "The Avengers assemble once more to undo the damage caused by Thanos."
}

];

export const collections: Collection[] = [
  {
    id: 1,
    title: "Top Sci-Fi",
    description: "The greatest Bollywood science fiction movies with futuristic imagination.",
    coverImage: "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/p8hiyb1om6wf84vh42kp.jpg",
    movies: [
      {
        id: 1,
        title: "Koi... Mil Gaya",
        posterUrl: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-112864,resizemode-75,msid-102348756/magazines/panache/hrithik-roshan-starrer-koi-mil-gaya-to-re-release-in-theatres-ahead-of-its-20th-anniversary.jpg",
        rating: 7.1,
        year: 2003,
        genre: ["Sci-Fi", "Drama"],
        mood: ["emotional", "magical", "uplifting"],
        director: "Rakesh Roshan",
        description: "A developmentally delayed man befriends an alien, changing his life forever."
      },
      {
        id: 2,
        title: "Krrish",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/9/95/Krrish_poster.jpg",
        rating: 6.8,
        year: 2006,
        genre: ["Sci-Fi", "Action", "Superhero"],
        mood: ["heroic", "adventurous", "visual"],
        director: "Rakesh Roshan",
        description: "A young man inherits superpowers and must save the world."
      },
      {
        id: 3,
        title: "Krrish 3",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMjI0MzU3MTM1Ml5BMl5BanBnXkFtZTgwOTk2MjQ0MDE@._V1_.jpg",
        rating: 5.3,
        year: 2013,
        genre: ["Sci-Fi", "Action", "Superhero"],
        mood: ["epic", "visual", "heroic"],
        director: "Rakesh Roshan",
        description: "The superhero returns to battle mutants and save humanity."
      },
      {
        id: 4,
        title: "Ra.One",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/5/58/Ra.Oneposter.jpg",
        rating: 4.8,
        year: 2011,
        genre: ["Sci-Fi", "Action"],
        mood: ["visual", "futuristic", "stylish"],
        director: "Anubhav Sinha",
        description: "A video game villain comes to life, wreaking havoc in the real world."
      },
      {
        id: 5,
        title: "Robot",
        posterUrl: "https://i0.wp.com/i.indiafm.com/firstlook/enthiran10.jpg",
        rating: 7.1,
        year: 2010,
        genre: ["Sci-Fi", "Action"],
        mood: ["futuristic", "intense", "visual"],
        director: "S. Shankar",
        description: "A scientist creates a humanoid robot that develops emotions."
      },
      {
        id: 6,
        title: "PK",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/c/c3/PK_poster.jpg",
        rating: 8.1,
        year: 2014,
        genre: ["Sci-Fi", "Comedy", "Drama"],
        mood: ["thought-provoking", "funny", "emotional"],
        director: "Rajkumar Hirani",
        description: "An alien stranded on Earth questions human society and religion."
      }
    ]
  },
  {
    id: 2,
    title: "80s Classics",
    description: "Iconic Bollywood movies from the 1980s that everyone should watch.",
    coverImage: "https://joshmisner.com/wp-content/uploads/2022/06/10257626_606055959479468_2570664154470696790_o.jpg",
    movies: [
      {
        id: 7,
        title: "Qurbani",
        posterUrl: "https://m.media-amazon.com/images/S/pv-target-images/8614a3c9a387d5a15571b6941196214b23e5c9f36c0d6668a7e17acb3f597de5.jpg",
        rating: 7.1,
        year: 1980,
        genre: ["Action", "Romance", "Drama"],
        mood: ["stylish", "musical", "thrilling"],
        director: "Feroz Khan",
        description: "A thrilling tale of love, sacrifice, and betrayal with iconic music."
      },
      {
        id: 8,
        title: "Karz",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/2/2f/Karz%2C_1980_film_poster.jpg",
        rating: 7.5,
        year: 1980,
        genre: ["Musical", "Romance", "Drama"],
        mood: ["musical", "dramatic", "classic"],
        director: "Subhash Ghai",
        description: "A singer reincarnates to avenge his past-life murder."
      },
      {
        id: 9,
        title: "Silsila",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/7/75/Silsila_1981_poster.jpg",
        rating: 7.6,
        year: 1981,
        genre: ["Romance", "Drama"],
        mood: ["emotional", "romantic", "classic"],
        director: "Yash Chopra",
        description: "A love triangle that explores passion, sacrifice, and relationships."
      },
      {
        id: 10,
        title: "Satte Pe Satta",
        posterUrl: "https://m.media-amazon.com/images/S/pv-target-images/aacd99e53069e73c61893a3d05fc69a4719a0104b1a65f01d669288f834ac7c2.jpg",
        rating: 7.2,
        year: 1982,
        genre: ["Comedy", "Drama", "Romance"],
        mood: ["funny", "dramatic", "classic"],
        director: "Raj N. Sippy",
        description: "Seven brothers find their lives transformed when one of them marries a kind woman."
      },
      {
        id: 11,
        title: "Mr. India",
        posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY4rhh_4LGGYfp7A4x5ErZknb7z1C1M1y1mg&s",
        rating: 7.8,
        year: 1987,
        genre: ["Sci-Fi", "Action", "Family"],
        mood: ["fun", "adventurous", "heroic"],
        director: "Shekhar Kapur",
        description: "A man uses an invisibility device to fight against an evil villain, Mogambo."
      }
    ]
  },
  {
    id: 3,
    title: "Fantasy Epics",
    description: "Epic Bollywood fantasy adventures full of magic and wonder.",
    coverImage: "https://www.servicescape.com/img/blog/post/postbg97791.webp",
    movies: [
      {
        id: 12,
        title: "Brahmāstra: Part One – Shiva",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/e/ea/Brahmastra_Part_One_Shiva.jpg",
        rating: 6.6,
        year: 2022,
        genre: ["Fantasy", "Adventure", "Romance"],
        mood: ["epic", "mythical", "visual"],
        director: "Ayan Mukerji",
        description: "A modern-day mythological fantasy about astras and destiny."
      },
      {
        id: 13,
        title: "Tumbbad",
        posterUrl: "https://seekred.com/wp-content/uploads/2018/10/tumbad-poster-07.jpg",
        rating: 8.2,
        year: 2018,
        genre: ["Fantasy", "Horror", "Drama"],
        mood: ["dark", "mythical", "intense"],
        director: "Rahi Anil Barve",
        description: "A haunting tale rooted in Indian folklore about greed and a hidden treasure."
      },
      {
        id: 14,
        title: "Thugs of Hindostan",
        posterUrl: "https://m.media-amazon.com/images/S/pv-target-images/1935fc5ee448114efad7bddc0ac94ea72cb60533b3a30552ed2ce09136853a5a.jpg",
        rating: 4.0,
        year: 2018,
        genre: ["Fantasy", "Adventure", "Action"],
        mood: ["adventurous", "grand", "visual"],
        director: "Vijay Krishna Acharya",
        description: "A tale of rebellion against the British with pirates and fantasy adventure."
      }
    ]
  }
];

