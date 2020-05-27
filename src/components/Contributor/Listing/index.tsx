import React, { useEffect, useState } from 'react'
import './style.css';
import Footer from '../../Footer';
import ContributorItem from '../ListItem';
import { ContributorService } from '../../../services/ContributorService';
import { Contributor } from '../../../model/contributor';

const ContributorListing = () => {
  const footerContent = "Not just contributors, until today we never realized that we can be life changers....";
  const contributorService =  new ContributorService();
  const [contributors, setContributors] = useState(new Array<Contributor>());

  async function getContributors() {
    let data = await contributorService.getAllContributors();
    data.json().then((response: Contributor[]) => {
      console.log(response);
      setContributors(response);
    })
  };

  useEffect(() => {
    getContributors();
  }, []);
   return(
    <div className='contributors'>
      <h1>Contributors</h1>
      <div className='contributors-content'>
        {
          contributors.map((contributor: any) => {
            return (<ContributorItem contributor={contributor} key={contributor.id} />)
          })
        }
      </div>
      <Footer content={footerContent}/>
    </div>
   )
  }

export default ContributorListing;