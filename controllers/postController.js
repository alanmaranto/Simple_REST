const postModel = require('../models/Posts.js');

const listPosts = async (req,res) => {

	const posts = await postModel.find({is_active:true});

	return res.status(200).json(posts);

}

const createPost = async (req, res) => {

	const post = await postModel.create(req.body).catch(e => res.status(400).json(e));

	res.status(201).json(post);

}

const getSinglePost = async (req, res) => {

	const {id} = req.params;

	const post = await postModel.findOne({_id:id,is_active:true}).catch(e => res.status(400).json(e));
	if (!post) res.status(404).json({message:"Post not found"});
	res.status(200).json(post);

}

const updatePost = async (req, res) => {

	const {id} = req.params;
	const post = await postModel.findOneAndUpdate({_id:id,is_active:true},{...req.body},{new:true}).catch(e => res.status(400).json(e));
	if (!post) res.status(404).json({message:"Post not found"});
	res.status(200).json(post);

}

const deletePost = async(req, res) => {

	const {id} = req.params;

	const deletedPost = await postModel.findOneAndUpdate({_id:id,is_active:true},{is_active:false}).catch(e => res.status(404).json(e));
	if (!deletedPost) res.status(404).json({message:"Post not found"});
		res.sendStatus(204);

}

const reactivePost = async (req, res) => {

	const {username} = req.body;
	const activeUser = await postModel.findOneAndUpdate({username,is_active:false},{is_active:true},{new:true});
	if (!activeUser) res.status(404).json({message:"Post not found"});
	res.status(200).json(activeUser);
}

module.exports = {
	listPosts,
	createPost,
	getSinglePost,
	updatePost,
	deletePost,
	reactivePost
}