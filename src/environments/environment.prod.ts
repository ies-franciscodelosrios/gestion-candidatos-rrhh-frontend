export const environment = {
  production: true,
  api:{
    url: 'https://172.16.16.104:7228',
    endpoints:{
      candidateGetAll:'/Candidate/GetAll',
      candidateGetById:'/Candidate/GetById',
      candidateInsert:'/Candidate/Insert'
    }
  }
};