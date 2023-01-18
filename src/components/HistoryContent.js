import React from 'react'
import './HistoryContent.css'

function HistoryContent () {
    return (
        <>
            <div className='hero-container'>
                <h1>HISTORY</h1>
                <img src='/images/img-2.jpg' className='header-img'/>
            </div>
            <div className='history-container'>
                <h1 className='display-2 history-header'>How it began</h1>
                <p className='lead history-content'>
                Generous Life Foundation was founded by Mr. EMMANUEL GYANDOH Nkwafi with the aid of some few friends in the year 2016. The foundation originally started with the name, Save A Life Foundation. However, this name had to change because it was found out that an existing foundation had already registered using the name, Save A Life Foundation. So the name of the foundation was later changed to Trinity Foundation which represented the three-in-one God. Unfortunately that name also had to be changed because once again another foundation had registered using that name. So it was this latter change that landed us with the name, Generous Life Foundation. The name Generous Life Foundation speaks concerning the generosity of its members towards the poor and less privileged thus making it an excellent choice when it comes to having a name for the foundation. As a matter of fact Galatians 5:22 talks about "generosity" being a fruit of the Spirit and the foundation helps its members bear this fruit by being generous to the poor and less privileged.
                </p>
                <h1 className='display-2 history-header'>Donations and Meetings</h1>
                <p className='lead history-content'>
                The first meeting held by the foundation when it was first established took place on the land of Pope John Senior High School on the 29th of March, 2016. With the primary aim of helping the poor and less privileged, the foundation was able to organize its first donation on the 26th of December, 2016. The donation, led by Mr. Nkwafi Gyandoh Emmanuel, took place at My Good Shepherd Orphanage located in Akwatia. A number of food items were bought and distributed to this orphanage home to put smiles on their faces and to show them the love of God. Since that time till now, the foundation has organized several donations to help better the lives of others. Places the foundation has visited include Jehovah Rapha in Suhum, SOS in Asiakwa etc... It is with this that the foundation calls on all people out there to support us so that together we can put smiles on the faces of the orphans and less privileged.
                </p>
                <h1 className='display-2 history-header'>Leadership</h1>
                <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        2016 / 2017
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        The following were the first exexutives of the Foundation
                        <ul>
                            <li><strong>Founder / General Overseer - </strong>Emmanuel Nkwafi Gyandoh</li>
                            <li>Mr. Justice Clark</li>
                            <li>Mr. Charles Osei Boadu</li>
                            <li>Mr. Harry Aboagye</li>
                            <li>Mr. Andy Asare</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        2017 / 2018
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Executives for the year 2017 / 2018 were:
                        <ul>
                            <li><strong>President - </strong>Emmanuel Nkwafi Gyandoh</li>
                            <li><strong>Vice President - </strong>Mr. Justice Clark</li>
                            <li><strong>Vice President - </strong>Mr. Charles Osei Boadu</li>
                            <li><strong>General Secretary - </strong>Miss Diane Yeboah</li>
                            <li><strong>Organizer - </strong>Mr. Adu Mensah</li>
                            <li><strong>Financial Secretary - </strong>Mr. Korankye Samuel</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        2018 / 2019
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Executives for the year 2018 / 2019 were:
                        <ul>
                            <li><strong>President - </strong>Emmanuel Nkwafi Gyandoh</li>
                            <li><strong>Vice President - </strong>Mr. Justice Clark</li>
                            <li><strong>General Secretary - </strong>Miss Michelle Abena Nkwafi</li>
                            <li><strong>Vice General Secretary - </strong>Miss Diane Yeboah</li>
                            <li><strong>Financial Secretary - </strong>Mr. Charles Osei Boadu</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div class='accordion' id='accordionExample-1'>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        2019 / 2020
                    </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Executives for the year 2019 / 2020 were:
                        <ul>
                            <li><strong>CEO - </strong>Emmanuel Nkwafi Gyandoh</li>
                            <li><strong>President</strong>Mr. Justice Clark</li>
                            <li><strong>Vice President - </strong>Mr. Charles Osei Boadu</li>
                            <li><strong>Financial Controller - </strong>Mr. David O. Agyekum</li>
                            <li><strong>Project Manager - </strong>Mr. Andy O. Asare</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )   
}

export default HistoryContent;