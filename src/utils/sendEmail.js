export const sendEmail = (email, type) => {
  console.log(type);
  const subjects = {
    inscricoes: 'Resposta à inscrição no Explore Alcanena',
    pedidosDeAlteracao: 'Resposta ao pedido de alteração no Explore Alcanena',
  };
  window.location.href = `mailto:${email}?subject=${subjects[type]}`;
};
