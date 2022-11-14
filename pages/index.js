import ComponentFunc from "../src/components"

const HomePage = (props) => {
    console.log(props, "props")
  return (
   <div>
     {props && (
          <>{props?.data?.widgets?.map((block) => ComponentFunc(block))}</>
      )}
   </div>
  )
}

export async function getStaticProps() {
    try {
      const pageContent = await (await fetch("http://localhost:3000/api/homepage")).json()

    //   const pageData = pageContent.json()
      console.log(pageContent, "page data")
  
      return {
        props: { 
          data: pageContent,
        },
        revalidate: 300,
      };
    } catch (error) {
      return {
        props: {
          apiError: true,
        },
      };
    }
  }

export default HomePage