import {
  createIdeaAccount,
  updateIdeausingId,
  deleteIdeausingId,
  getIdeas,
  getIdea,
} from '../repository/innovationIdea.js';

export const addIdea = async ({
  entName,
  entEmail,
  entContact,
  entComName,
  entComEmail,
  entComCountry,
  entComDes,
  ideaName,
  ideaDescription,
  ideaIndustry,
  ideaBudget,
}) => {
  const details = {
    entName,
    entEmail,
    entContact: Number(entContact),
    entComName,
    entComEmail,
    entComCountry,
    entComDes,
    ideaName,
    ideaDescription,
    ideaIndustry,
    ideaBudget: Number(ideaBudget),
  };

  const y = await createIdeaAccount(details);
  return y.msg;
};

export const updateIdeaById = async (id, ob) => {
  console.log(ob);
  const ans = await updateIdeausingId(id, ob);
  return ans;
};

export const deleteIdeaById = async (id) => {
  return await deleteIdeausingId(id);
};

export const getAllIdeas = async (params) => {
  return await getIdeas(params);
};

export const getIdeaById = async (id) => {
  return await getIdea(id);
};
