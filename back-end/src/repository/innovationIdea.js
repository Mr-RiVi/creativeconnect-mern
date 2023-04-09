import Idea from '../models/innovationIdea.js'  
import mongoose from 'mongoose'

//Add new idea
export const createIdeaAccount = async (details) => {
  console.log(details)
  try {
    const idea = new Idea({
      entName:details.entName,
      entEmail:details.entEmail,
      entContact:details.entContact,
      entComName:details.entComName,
      entComEmail:details.entComEmail,
      entComCountry:details.entComCountry,
      entComDes:details.entComDes,
      ideaName: details.ideaName,
      ideaDescription: details.ideaDescription,
      ideaIndustry: details.ideaIndustry,
      ideaBudget: details.ideaBudget,     
    })
    
    await idea.save()
    return { msg: 'Idea created' }
  } catch (error) {
    return { msg: 'Idea not created' }
  }


}
console.log("connected  repo successfully");

export const updateIdeausingId = async (id, ob) => {
  try {
    const res = await Idea.findById(id)
    console.log(ob)
    Object.assign(res, ob)
    await res.save()
    return { msg: 'update successfull' }
  } catch (error) {
    return { msg: 'updation not successfull'+ error }
  }
}

export const deleteIdeausingId = async (id) => {
  try {
    await Idea.findByIdAndDelete(id)
    return { msg: 'deletion successfull' }
  } catch (error) {
    return { msg: 'deletion not successfull' }
  }
}

export const getIdeas = async (params) => {
  try {
    let filter = {}
    if(params.ideaName){
      filter.ideaName = {'$regex' : params.ideaName, '$options' : 'i'}
    }
    
    const a = await Idea.find(filter).sort({ createdAt: -1 })
    console.log (a)
    return a
  } catch (error) {
    return { msg: 'No Idea Found' }
  }
}
export const getIdea = async (id) => {
  return await Idea.findById(id)
}

