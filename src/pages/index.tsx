import React from "react";

import Layout from "../layout/Layout";
import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import Feed from "../components/Feed/Feed";

const posts = Array.from({ length: 30 }, (_, index) => ({
  imageURL : 'https://s2.glbimg.com/qsj9O4LxSvKZop_4IaKlAr-4yvk=/e.glbimg.com/og/ed/f/original/2022/01/07/border-collie-pesquisa.jpeg',
  title : `titulo ${index}`,
  link : '#',
}))

function Home() {
  return (
    <Layout>
      <div>
        <ProfileHeader
          imageURL=
            "https://s2.glbimg.com/qsj9O4LxSvKZop_4IaKlAr-4yvk=/e.glbimg.com/og/ed/f/original/2022/01/07/border-collie-pesquisa.jpeg"
          title="@Zhara"
          name="Zhara"
          breed="Rotweiller"
          ocupation="Mastigadora de Sofás"
          description=
            "Acima de tudo, é fundamental ressaltar que o aumento do diálogo entre os diferentes setores produtivos apresenta tendências no sentido de aprovar a manutenção dos métodos utilizados na avaliação de resultados."
        />
      </div>
      <Feed data={posts} />
    </Layout>
  );
}

export default Home;