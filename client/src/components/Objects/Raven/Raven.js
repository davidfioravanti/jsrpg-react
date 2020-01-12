import React from "react";
import "./Raven.css";

const Raven = () => {
    return (
        <div id="ravenDiv" className="ravenDiv">
            <pre className="ravenFrame1">
                {String.raw`
                                            ./oyhdmmmmmdyso//+++++/:.                                                                            
                                      '/ymmddhhhhdddhhddhdhhhhhhhdddyo/'                                                                       
                                    :ymdhhhhhdmNmysymmdhhhhhhhhhhhhhhhdds-                                                                     
                                  -hmddddddddhhmds+sddddmmmdddmmNNNNNNNNmdo.                                                                   
                                 oddddddddddddmddNNmddmmNmdddddmmdhyo/:.'                                                                      
                               -hmddhmddddddddddddddmddddddddds:'                                                                              
                              /dddhdmhhhhddddhddddddmddddmddd:                                                                                 
                             /hdmmmdhhhddhdmdddhddmmddmNmddddh:                                                                                
                            -dmmdhhhhhhhhddhhdddmdmdmmmmmddmmNNms:                                                                             
                           'dhdhyyhhyhdddddmdddddmddmdmddmNmNmNdmmms:                                                                          
                           +dhhyyyhyhdhhhmNNNdNmmmdmddddddMmmmNNddmmmd:                                                                        
                           +dhhyyyhyhdhmNNNmdNNddhdddmddmNmmdNmNNNdmNdmh+.                                                                     
                           'mhhhyyhdmmNNNmddNmdhddddmNmNmmdmmdmmdNNmNmmmmmho:'                                                                 
                           'mhhyhdmmNmmmdhmmmhhdddmNNNmdddNNmdNdmNNNddhmmdddmms:                                                               
                            +mhhdNNmmdmhhmddhhddmNNmmmddmNmmmNmdmNMMNNNNNMNNNNNNm+.                                                            
                            +dddmmddhdhhdddhhhmmmmdmmmNmmdmNNmNNmmmmmmddmNmddmddddmy:                                                          
                          .oddmdmdhydhhhdddddddmmdmmmmmmdmmmdNNmdddddNNmddddddmmdhhdmh/'                                                       
                          smdddhmdhhmhdhdhhdddmdddmddddddddddMddmmdhdmNdmmmhhdddddddhhmd+'                                                     
                          dNdmdddmdddhdmhhddddmddmddddddmddddNdddmNmNmdmmdmNmdhmNmddmdhhmmo.                                                   
                         -mmdNdddmmhhhmdhdddddmdddddddddmddddMdddNmdmNmmmmmdmmmdNNNmmmddhhmmo.                                                 
                         /dmddmddddmmdmmddddddddddddddddmddddNmddddmNMNmmmmNmddmmdmNmmdhddhdNmo.                                               
                         -mdmdddddddmmddddddddddddddddmdmdddddNdddddmNMMNmmmmmdddmdddmmddhdddo/h/                                              
                          hmNdddddddmmdddddddddddddddddmmmdddmdNddddddmMMMNmmmmmdddmdhhdddhmhhy-o'                                             
                          .mmmdddhddmdddmmddddddddddddddmmddddmdmmdddmddNNMMmmmmmmNNdmNddmmdhhhd+'                                             
                           /mNmdhhdddmdddMdddddddddddddddmmdddmmmmmdddmmddmmmmmmmdmNMNNmdhhhyyhhmh-                                            
                            ymmddhhdddddmNddddddddddddddddmddddmmmdmddmmmmdddddmNNddmMMNddmdhyyyddmo'                                          
                            'dmhdmhhdhddmNddddddddddddddddddddddmmmdmmdmNNNmmmdddmmddmNMNdNNNdyyhdddd/'                                        
                             -dNdmhhhhhddNddddddddddddddddddddddddmdddmmdNNNmmmdddddhddmNNddNMNdyhdddmh/'                                      
                              '/mmhhdhhhhdmddddddddddddddddddddddddddddmmmmNNNmmmddddddddddhddNMmdddmddmh+.                                    
                                +NdhdddhhhdmddddddddddmddddddddddddddddddmmmmmNmddddddddmmmdhddmNMNmdddddmdy/.                                 
                                 sNhhhddddhhddddddddddddddddddmmddddddddddddmNmmmdddddddddmmmmddmmNMNdmdddddmdy-                               
                                 'sdhhhhdddhhhddddddddddddddddmmmmddddddddddddddddddddddddddmmmddmmNMNmmddddddmd                               
                                   +dhhhhhdddhdddddddddddddddmmmmmmmmmmmmmmddddddddddddmddddddmmmNmdmMMNmmdddmdy                               
                                    :hdhhhhhddhdddddddddddddddmmmmmmmmmmmmmmmmmdddddddddmmmmdmmdmdmmddNMNmmdmh'                                
                                     'ommdddddhhdhdddddddddddddmmmmmmmmmmmmmmmmmmmddddddddmmNmmdddmmmdddNMNddN.                                
                                       -soohmNmddhhhhdddddmdddddmmmmmmmmmmmmmmmmmmmmmddddddmmmNmdmddmNmdddmNdmy.                               
                                         :-'-/oydmhhhhdhddddmmdddmmmmmmmmmmmmmmmmmmmmmmmdddddmmmmmmNmmNNddddNdmh                               
                                                .omdhhhhddddddddddmmmmmmmmmmmmmmmmmmmmmddddddddmmmmmmmdNmddddds/                               
                                                  .ymdhhhdddddmdddddmmmmmmmmmNmmmmmmmmmmdmmdddddmmmmmddddmmmddm/                               
                                                    :ddmhddddddmmdddmmmmmmmmmmNmmmmmmmNmmmmmddddddmmmmddddmmmddNo'                             
                                                     'ym.odddmdhmmdddmdmmmmmmmNNmmmmmNNNmmmmddddddddmmmmdmddmNddNh.                            
                                                       :  :mdmohddmdddmddmmmmmmmmmmmmNNmmmmNdddddddddmmmmddmdmNmdmm-                           
                                                           /mm. /hhNmdmddy-smmmmmmmmNNmmmmmNmmdddddddddmmmddmmmNmdmN/                          
                                                            dy   .ooymNs.   dmNmmmNNNmNmmmmmmmddddddddddddddddmmNNddNo'                        
                                                            -' '/+'-+-/'    /omdNNmmmmmmmmmmmmdddddddddddddddddmmNNddNy.                       
                                                              .+-'/:        .::-ohsdmmmmmmmmmmmddddddddddddddddddmmNddmm:                      
                                                            '//'-+'       ':- ./:' 'odmddddddmmddddddddddddddddddddmNdddNo'                    
                                                           :/''/-       .-. ':-      .sddddddddddddddddddddddddddddmdmdddNh.                   
                                                         ./. '-         '   '          -yddddddddddddddddmmmddddddddmdmmddmNh+.'               
                                                         '                               -/ooydddddddddddddmmddddddddmdmmdddmNmho-'            
                                                                                              -hdddddddddddddmmdddddddmdmmddddddmmh+.          
                                                                                               '+ddddddddddddddmmmmddddmddmddddddddmmy:'       
                                                                                                 'odddddddddddddddmmmdddmmddddddddddddmd+      
                                                                                                   '+hddddddddddddddmmdddmmdddddmddddddmh      
                                                                                                     '/hdhddddddddddddmmddmmmmddNoo+syhy'      
                                                                                                        :sdhhdddddddmmddmmmddmNddd             
                                                                                                          '/yhddddddddmmmmdmdmdNdm/            
                                                                                                             .dhdddddddddmmmmm/.mmo            
                                                                                                              ./+ohddddddddddddy+h/            
                                                                                                                   /hddddddddddddds'           
                                                                                                                     -smddddddddddh:           
                                                                                                                       '+hmddhs+..             
                    
                `}
            </pre>
        </div>
    )
}

export default Raven;