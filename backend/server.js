import express from "express";
import cookieParser from "cookie-parser";

import path from "path";

import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";
import searchRoutes from "./routes/search.route.js";

import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import { protectRoute } from "./middleware/protectRoute.js";

const app = express();

const PORT = ENV_VARS.PORT;
const __dirname = path.resolve();

app.use(express.json()); // will allow us to parse req.body
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);//if login then movieRoutes will be execute
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

if (ENV_VARS.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.get("/",(req,res)=>{
	res.send("your are good to go!");
})

app.listen(PORT, () => {
	console.log("Server started at http://localhost:" + PORT);
	connectDB();
});

// const options = {
// 	method: 'GET',
// 	headers: {
// 	  accept: 'application/json',
// 	  Authorization: 'Bearer'+ENV_VARS.TMDB_API_KEY
// 	}
//   };
  
//   fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
// 	.then(res => res.json())
// 	.then(res => console.log(res))
// 	.catch(err => console.error(err));