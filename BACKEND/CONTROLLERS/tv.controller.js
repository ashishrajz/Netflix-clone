import {fetchFromTMDB} from '../services/tmdb.service.js'

export async function getTrendingTv(req,res){
    try{
        const data= await fetchFromTMDB('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1')
        const randomMovie=data.results[Math.floor(Math.random()*data.results?.length)]
        res.json({success:true,content:randomMovie})

    }catch(err){
        res.status(500).json({success:false,message:'Internal server error'});
    }
}

export async function getTvTrailer(req,res){
    const {id}=req.params
    try{
        const data= await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`)
        res.json({success:true,trialers:data.results})

    }catch(err){
        if(err.message.includes("404")){
            return res.status(404).send(null);
        }
        res.status(500).json({success:false,message:'Internal server error'});
    }
}

export async function getTvDetails(req,res){
    const {id}=req.params
    try{
        const data= await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}?language=en-US`)
        res.json({success:true,content:data})

    }catch(err){
        if(err.message.includes("404")){
            return res.status(404).send(null);
        }
        res.status(500).json({success:false,message:'Internal server error'});
    }
}

export async function getSimilarTvs(req,res){
    const {id}=req.params
    try{
        const data= await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`)
        res.json({success:true,similar:data.results})

    }catch(err){
        res.status(500).json({success:false,message:'Internal server error'});
    }
}

export async function getTvsByCategory(req,res){
    const {category}=req.params
    try{
        const data= await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`)
        res.json({success:true,content:data.results})

    }catch(err){
        res.status(500).json({success:false,message:'Internal server error'});
    }
}





