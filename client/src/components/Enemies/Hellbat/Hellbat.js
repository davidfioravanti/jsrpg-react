import React from "react";
import "./Hellbat.css";

const attackAnimation = () => {
  const hellbatDiv = document.getElementById("hellbatDiv");
  hellbatDiv.classList.add("swirl");
  setTimeout(() => { hellbatDiv.classList.remove("swirl") }, 2000);
}

const Hellbat = () => {
    return (
      <div id="hellbatDiv" className="hellbatDiv"  onClick={attackAnimation}>
        <pre className="hellbatFrame1">
        {String.raw`
                                                                      -hMy                                                                                                                              
                                                                     +Nhmy                                                                                                                              
   .m-                                                              sNssN+                                                                                                                              
   hm.                                                            'ymoosM-                                                                                                                              
  |sh-                                                            ym++osM-                                                                                                                              
  h|ss                                                           om+|+osM-                                                          '                                                                   
 -y|od-                            '||                          |N+||+osM|                                                         sNm:                                                                 
 |+|oym:                         '+hh.                         -Ns:||+oomh                                                        'NNNN:                                                                
 |+|oydNy.                      -soh.                          dh::||+ooyM-                                                       |MmmNN.                                                               
 .y|oydNMNo                    +s|y|                          +m|::||+oosmd                                                       hNmmNMh                                                               
 'mNmNMMMMMd:                 o+|om.                         .No-::||+oosyNs                                                     |MmmmNNM:                                                              
 oMMMMMMMMMMMd+-             s|:+ym'                         sm--::||+oosshNo                                                   .mNmmmNNMd                                                              
'NMMMMMMMMMMMMMNNdhhhhdmNNNNNy:+shN.                        .No--::||+oossyhNs'                                                -mNdmmmNNNM-                                                             
|MMMMMMMMMMMMMMMMMMMMMMMMMMMMdoshmM-                        +N---::||+oossyhdNh.                                              |mmddmmmNNNMs                                                             
yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNMM+                     ': hh---::||+oossyhhdmm|                                           .yNddddmmmNNNMm'                                                            
NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMh     -               ys'No---::||+oossyhhddmNy.     '.:|+ooyyhhhhhhhysoo+::.'         -smdhhdddmmmNNNNM.                      :.                          -s-       
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM.   :d              om-'M|---::||+oossyhhddmmNNo+shmNNNMMMMMMMMMMMMMMMMMMMNNNmhs|-'':ymhyyhhdddmmmNNNNM|                      +d+.                         ods.     
MMMMMMMMMMMMNhMMMMMMMMMMMMMMMMMMMMMMh  'hh             :yh''M+---::||+oossyhhddmmmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNdhyssyyhhdddmmmNNNNMs                       +hy|                         sys+'   
MMMMMMMMMMMMd+NMMMMMMMMMMMMMMMhmMMMMMs'sdo            'y+d  dy---::||+oossyhhddmmmNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmhsooossyyhhdddmmmNNNNMy                        hoos.                       .doos.  
dMMMMMMMMMMMy+hMMMMMMMMMMMMMMy+mMMMMMMmdd:''''...''   |o+d  +N:--::||+oossyhhddmmmNNNMMMMMMMMMMMMMMMMMMMMMMMMMMNmhs+||++oossyyhhdddmmmNNNNMy                        +ho+s-                       ds+|s- 
sMMMMMMMMMMMNydMMMMMMMMMMMMMN|sNMMMMMMMmMmmmmmNNNmmdhoh|sm- 'hd:-::||+oossyhhddmmmNNNMMMMMMMMMMMMMMMMMMMMMMMmho|:-::||++oossyyhhdddmmmNNMMMs                        :my+|y-                      dhs+|y.
-MMMMMMMMMMMMMMMMMMMMMMMMMMMMdmMMMMMMMMMMMMMMMMMMMMMMMh|yN-  'sdo::||+oossyhhddmmmNNMMMMMMNNNNNNNNNNNNNNNMd|-..---::||++oossyyhhdddmmmNNNMN+                        +Nhs+|dyyso|:.            .+hMmhs+oo
 hMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNymM+    -ymhsoooossyhhddmNNMMMNNNNNNNNNNNNNNNNNNNMd.'...---::||++oossyyhhdddmmmNNNMmy|                       :NmhsomMMMMMNNmyo|-...-:+hmMMMNmhydy
 -NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmMMMMMMMMMMMMm'   |mMMMNNmmmmmNNNMMMMNNNNNNNNNNNNNNNNNNNNNNMd.'...---::||++oossyyhhdddmmmNNNMNyso'                     'mMNmNMMMMMMMMMMMMNNmNNNMMMMMMMMNNMN
  |NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMydMMMMMMMMMMMMMs -hMMMMMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNMh:...---::||++oossyyhhdddmmmNNNMmmooo                    'hMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
   :mMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMomMMMMMMMMMMMMMMyNMMMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNy:----::||++oossyyhhdddmmmNNMMMMhooo                  -dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    .sNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNdo|:::||++oossyyhhdddmmmNMMMMMNhohhhhhhys+:.'     -sNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMd
      .+hmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmhso+++oossyyhhdddmNMMMMMMMMNdmNNNNNNNNNNmhysydNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMo
         .-:++syhdmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNNNNNMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmmdddhhhddmmNNMMMMMMMMMNNNNNNNNNNNNNNNNMMMMNdmMMMMMMMMMMMMMMMMMdNMMMMMMMMMMMMMMMMM-
                 '.-+ymMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMMMMMNNNNNNNNNNNNNNNNNNNMNhohMMMMMMMMMMMMMMMMMmoNMMMMMMMMMMMMMMMMh 
                      .:yNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMMNmmNNNNNNNNNNNNNNNNNMMMNNNNNNNNNNNNNNNNNNNNh++hMMMMMMMMMMMMMMMMMNyoNMMMMMMMMMMMMMMMM: 
                         .sNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMmmmmNNNNNNNNNNNNNNMMNNNNNNNNNNNNNNNNNNNNNo|+yNMMMMMMMMMMMMMMMMMdsyMMMMMMMMMMMMMMMMy  
                           -hMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmmmmmmNNNNNNNNNNMMNNmmNNNNNNNNNNNNNNNNNN+|oymMMMMMMMMMMMMMMMMMMNmNMMMMMMMMMMMMMMMm'  
                            '|dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNNMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMNNNmmmmmmmmmNNNNNNMMNNmmmmmNNNNNNNNNNNNNNNNNN+shmMMMdNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMm-   
                              '|ymNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNNNNmshdmNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmhsmmmmmmmmmmmmmmNNNMNmmmmmmmmmNNNNNNNNNNNNNNNNNNmmNMMMNyNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMm-    
                                 .-||+++oooosssyyhhdMMMMMMMMMMMNNNNNNNd:..-:||+syhdmNNNNNNNNNNNNNNNmddyo|-'  -mmmmmmmmmmmmmNMNmmmmmmmmmmmNNNNNNNNNNNNNNNNNNNNNNMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMd.     
                                                   :MMMMMMMMMMMNNNNNNN|---.......-oddhyyyyhhhsooooo|:-'       |NmmmmmmmmmmmNMNmmmmmmmmmmmNNNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNo'      
                                                   sMMMMMMMMMMNNNNNNMs------....:dhyyssoooooo+|||||||:         hmdmmmmmmmmmmNMmmmmmmmmmmmNNNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmy-        
                                                   yMMMMMMMMMMNNNNNNM|--------.:mhysso+|||||++++++++-'         |NddmmmmmmmmmmNMNmmmmmmmmmNNNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMMMNNNmmNNNNMMMNNmy|.          
                                                   hMMMMMMMMMMNNNNNNN:---------smysso+|:---::|+oosyd'          -NddmmmmmmmmmmmNNNNNNNmmmmNNNNNNNNNNNNNNNNNNNNNNMMMMMMMNmhs+:--...---::::-.'             
                                                   hMMMMMMMMMMNNNNNNN:::-------ydysso+|:----:|+ossym.          .NddmmmmmmmmmmmNNNNNNMMMMNNNNNNNNNNNNNNNNNNNNNNNMMMMNdo-'                                
                                                   yMMMMMMMMMMNNNNNNN::::------+myyso+|:::::||+osyhy'          :NddmmmmmmmmmmmNNNNNNNNNNNMMMMMMMMMMMMNNNNNNNNMMMNds-'                                   
                                                   sMMMMMMMMMMNNNNNNMs:::-------ydyysoo++||++oosyhd.'          smdmmmmmmmmmmmNNNNNNNNNNNNNNMMMMMMMMMMyoyhdmmmdy+-'                                      
                                                   :MMMMMMMMMMMNNNNNNm|:::-------odhyyssooosssyhdy.'''        -NmmmmmmmmmmmmmNNNNNNNNNNNNNNMMMMMMMMMM.    '''                                           
                                                   'mMMMMMMMMMMNNNNNNNh::::-------:ohhhhyyyyhhho:'''''''     .dmmmmmmmmmmmmmNNNNNNNNNNNNNNMMMMMMMMMMd                                                   
                                                    sMMMMMMMMMMNNNNNNNMh::---------..-|++o++|-.'''''''''''  -dmmmmmmmmmmmmmNNNNNNNNNNNNNNNMMMMMMMMMM+                                                   
                                                    .NMMMMMMMMMMNNNNNNNNd+:---------........'''''''''''''''|mmmmmmmmmmmmmmNNNNNNNNNNNNNNNMMMMMMMMMMm'                                                   
                                                     oMMMMMMMMMMMNNNNNNNNNy|--------.........''''''''''''-yNmmmmmmmmmmmmmNNNNNNNNNNNNNNNMMMMMMMMMMM|                                                    
                                                     'dMMMMMMMMMMMNNNNNNNNNNy|:-----.........'''''''''.|ymmmmmmmmmmmmmmmNNNNNNNNNNNNNNNNMMMMMMMMMMy                                                     
                                                      .mMMMMMMMMMMMNNNNNNNNNNNdy+:--..........''''.-|sdNmmmmmmmmmmmmmmNNNNNNNNNNNNNNNNMMMMMMMMMMMd'                                                     
                                                       :NMMMMMMMMMMMNNNNNNNNNNNNNmdyo+|::----::+oydmNmmmmmmmmmmmmmmNNNNNNNNNNNNNNNNNNMMMMMMMMMMMm.                                                      
                                                        :NMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNmmmNNNNNmmmmmmmmmmmmmmmNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMm.                                                       
                                                         -mMMMMMMMMMMMMNNNMNmhdmNMmddmNNNNNNNNmmmmmmmmmmmmmNNNNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMMd.                                                        
                                                          .hMMMMMMMMNmhhdmMs|oyhNd|+sydNMNNmmNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMMy'                                                         
                                                           'oNMMMMMm+|+oyhm-|oydN+:+shmMMNdhsodNNNmNNNNNNNNNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMMN+                                                           
                                                             -dMMMM+-|+oydy:|oydN|:+sdMMMmhs+|sNmdyohNNNNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMMMMy.                                                            
                                                               +mMN::|+syds:+shNMo|ohMMMMmyo||mNdys+oNmmmmNNNNNNNNNNNNNNNMMMMMMMMMMMMMMMd:                                                              
                                                                '+m::|+symy:+smMMh|sMMMMMms++mMmhs+|ymdhsosNNNNNNNNNNNMMMMMMMMMMMMMMMMm|                                                                
                                                                  s|:|osdMh:+dMMMN+dMMMMMd+oNMMdyo|+mdhyo+|yMNNNMMMMMMMMMMMMMMMMMMMMd|                                                                  
                                                                  |o:+odMMN|oMMMMMdNMMMMMshMMMMho+|mdhyo+|:hMMMMMMMMMMMMMMMMMMMMMNy-                                                                    
                                                                  .h|+yy+hNohMMMMMMMMMMMmNMMMMNs++mNhyo+|:oMMMMMMMMMMMMMMMMMMMNh|'                                                                      
                                                                   s++d.  :hmNMMMMMMMMMMMMMMMMmoomMNys+|:sMMMMMMMMMMMMMMMMMmy|'                                                                         
                                                                   .hoy    hm'-+ymNMMMMMMMMMMMysNMMms+||hMMMMMMMMMMMMMNmy+.                                                                             
                                                                    |hy    -s     .:+ydNMMMMMmhMMMMho|omMMMMMMMMMmhs+:'                                                                                 
                                                                     ++                 '-:oNhyyydmooyhhyyso+|-.                                                                                        
                                                                                           -|   .hyy|                                                                                                   
                                                                                               'my:                                                                                                     

            `}
            </pre>
        <pre className="hellbatFrame2">{String.raw`
            
                                                                      -hMy                                                                                                                              
                                                                     +Nhmy                                                                                                                              
   .m-                                                              sNssN+                                                                                                                              
   hm.                                                            'ymoosM-                                                                                                                              
  |sh-                                                            ym++osM-                                                                                                                              
  h|ss                                                           om+|+osM-                                                          '                                                                   
 -y|od-                            '||                          |N+||+osM|                                                         sNm:                                                                 
 |+|oym:                         '+hh.                         -Ns:||+oomh                                                        'NNNN:                                                                
 |+|oydNy.                      -soh.                          dh::||+ooyM-                                                       |MmmNN.                                                               
 .y|oydNMNo                    +s|y|                          +m|::||+oosmd                                                       hNmmNMh                                                               
 'mNmNMMMMMd:                 o+|om.                         .No-::||+oosyNs                                                     |MmmmNNM:                                                              
 oMMMMMMMMMMMd+-             s|:+ym'                         sm--::||+oosshNo                                                   .mNmmmNNMd                                                              
'NMMMMMMMMMMMMMNNdhhhhdmNNNNNy:+shN.                        .No--::||+oossyhNs'                                                -mNdmmmNNNM-                                                             
|MMMMMMMMMMMMMMMMMMMMMMMMMMMMdoshmM-                        +N---::||+oossyhdNh.                                              |mmddmmmNNNMs                                                             
yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNMM+                     ': hh---::||+oossyhhdmm|                                           .yNddddmmmNNNMm'                                                            
NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMh     -               ys'No---::||+oossyhhddmNy.     '.:|+ooyyhhhhhhhysoo+::.'         -smdhhdddmmmNNNNM.                      :.                          -s-       
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM.   :d              om-'M|---::||+oossyhhddmmNNo+shmNNNMMMMMMMMMMMMMMMMMMMNNNmhs|-'':ymhyyhhdddmmmNNNNM|                      +d+.                         ods.     
MMMMMMMMMMMMNhMMMMMMMMMMMMMMMMMMMMMMh  'hh             :yh''M+---::||+oossyhhddmmmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNdhyssyyhhdddmmmNNNNMs                       +hy|                         sys+'   
MMMMMMMMMMMMd+NMMMMMMMMMMMMMMMhmMMMMMs'sdo            'y+d  dy---::||+oossyhhddmmmNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmhsooossyyhhdddmmmNNNNMy                        hoos.                       .doos.  
dMMMMMMMMMMMy+hMMMMMMMMMMMMMMy+mMMMMMMmdd:''''...''   |o+d  +N:--::||+oossyhhddmmmNNNMMMMMMMMMMMMMMMMMMMMMMMMMMNmhs+||++oossyyhhdddmmmNNNNMy                        +ho+s-                       ds+|s- 
sMMMMMMMMMMMNydMMMMMMMMMMMMMN|sNMMMMMMMmMmmmmmNNNmmdhoh|sm- 'hd:-::||+oossyhhddmmmNNNMMMMMMMMMMMMMMMMMMMMMMMmho|:-::||++oossyyhhdddmmmNNMMMs                        :my+|y-                      dhs+|y.
-MMMMMMMMMMMMMMMMMMMMMMMMMMMMdmMMMMMMMMMMMMMMMMMMMMMMMh|yN-  'sdo::||+oossyhhddmmmNNMMMMMMNNNNNNNNNNNNNNNMd|-..---::||++oossyyhhdddmmmNNNMN+                        +Nhs+|dyyso|:.            .+hMmhs+oo
 hMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNymM+    -ymhsoooossyhhddmNNMMMNNNNNNNNNNNNNNNNNNNMd.'...---::||++oossyyhhdddmmmNNNMmy|                       :NmhsomMMMMMNNmyo|-...-:+hmMMMNmhydy
 -NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmMMMMMMMMMMMMm'   |mMMMNNmmmmmNNNMMMMNNNNNNNNNNNNNNNNNNNNNNMd.'...---::||++oossyyhhdddmmmNNNMNyso'                     'mMNmNMMMMMMMMMMMMNNmNNNMMMMMMMMNNMN
  |NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMydMMMMMMMMMMMMMs -hMMMMMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNMh:...---::||++oossyyhhdddmmmNNNMmmooo                    'hMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
   :mMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMomMMMMMMMMMMMMMMyNMMMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNy:----::||++oossyyhhdddmmmNNMMMMhooo                  -dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    .sNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNdo|:::||++oossyyhhdddmmmNMMMMMNhohhhhhhys+:.'     -sNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMd
      .+hmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNNNNNNNNMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmhso+++oossyyhhdddmNMMMMMMMMNdmNNNNNNNNNNmhysydNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMo
         .-:++syhdmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNNMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNMNNNNNNNNNNmmdddhhhddmmNNMMMMMMMMMNNNNNNNNNNNNNNNNMMMMNdmMMMMMMMMMMMMMMMMMdNMMMMMMMMMMMMMMMMM-
                 '.-+ymMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMNNNNNNNNNNNNNNNNNNNNNNMMMMMNNNNNNNNNNNNNNNNNNNMNhohMMMMMMMMMMMMMMMMMmoNMMMMMMMMMMMMMMMMh 
                      .:yNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMNNNNNNNNNNNNNNNNNNNNMMMNNNNNNNNNNNNNNNNNNNNh++hMMMMMMMMMMMMMMMMMNyoNMMMMMMMMMMMMMMMM: 
                         .sNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMMNNNNNNNNNNNNNNNNNNNNNo|+yNMMMMMMMMMMMMMMMMMdsyMMMMMMMMMMMMMMMMy  
                           -hMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmNNNNNNNNNNMMNNmmNNNNNNNNNNNNNNNNNN+|oymMMMMMMMMMMMMMMMMMMNmNMMMMMMMMMMMMMMMm'  
                            '|dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmNNNNNNMMNNmmmmmNNNNNNNNNNNNNNNNNN+shmMMMdNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMm-   
                              '|ymNMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmNNNMNmmmmmmmmmNNNNNNNNNNNNNNNNNNmmNMMMNyNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMm-    
                                 .-||+++oooosssyyhhdMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmNMNmmmmmmmmmmmNNNNNNNNNNNNNNNNNNNNNNMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMd.     
                                                   :MMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmNMNmmmmmmmmmmmNNNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNo'      
                                                   sMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmmNMmmmmmmmmmmmNNNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmy-        
                                                   yMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmmmmNMNmmmmmmmmmNNNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMMMNNNmmNNNNMMMNNmy|.          
                                                   hMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmmmmmmNNNNNNNmmmmNNNNNNNNNNNNNNNNNNNNNNMMMMMMMNmhs+:--...---::::-.'             
                                                   hMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmmmmmmmNNNNNNMMMMNNNNNNNNNNNNNNNNNNNNNNNMMMMNdo-'                                
                                                   yMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmmmmmmmmmNNNNNNNNNNNMMMMMMMMMMMMNNNNNNNNMMMNds-'                                   
                                                   sMMMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmmmmmmmmmmNNNNNNNNNNNNNNMMMMMMMMMMyoyhdmmmdy+-'                                      
                                                   :MMMMMMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmmmmmmmmmmmmNNNNNNNNNNNNNNMMMMMMMMMM.    '''                                           
                                                   'mMMMMMMMMMMNNNNNNMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmdNmmmmmmmmmmmmmNNNNNNNNNNNNNNMMMMMMMMMMd                                                   
                                                    sMMMMMMMMMMNNNNNNNMmssddmNNNNNNNNNNNNNNNNNNNNNNNNNNNmds||dmmmmmmmmmmmmmNNNNNNNNNNNNNNNMMMMMMMMMM+                                                   
                                                    .NMMMMMMMMMMNNNNNNNNd+:::+ooshdmmmmNNNNNNNNNNmmddyo|-''|mmmmmmmmmmmmmmNNNNNNNNNNNNNNNMMMMMMMMMMm'                                                   
                                                     oMMMMMMMMMMMNNNNNNNNNy|--------:||+oo+++++++:-..''''-yNmmmmmmmmmmmmmNNNNNNNNNNNNNNNMMMMMMMMMMM|                                                    
                                                     'dMMMMMMMMMMMNNNNNNNNNNy|:-----.........'''''''''.|ymmmmmmmmmmmmmmmNNNNNNNNNNNNNNNNMMMMMMMMMMy                                                     
                                                      .mMMMMMMMMMMMNNNNNNNNNNNdy+:--..........''''.-|sdNmmmmmmmmmmmmmmNNNNNNNNNNNNNNNNMMMMMMMMMMMd'                                                     
                                                       :NMMMMMMMMMMMNNNNNNNNNNNNNmdyo+|::----::+oydmNmmmmmmmmmmmmmmNNNNNNNNNNNNNNNNNNMMMMMMMMMMMm.                                                      
                                                        :NMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNmmmNNNNNmmmmmmmmmmmmmmmNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMm.                                                       
                                                         -mMMMMMMMMMMMMNNNMNmhdmNMmddmNNNNNNNNmmmmmmmmmmmmmNNNNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMMd.                                                        
                                                          .hMMMMMMMMNmhhdmMs|oyhNd|+sydNMNNmmNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMMy'                                                         
                                                           'oNMMMMMm+|+oyhm-|oydN+:+shmMMNdhsodNNNmNNNNNNNNNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMMN+                                                           
                                                             -dMMMM+-|+oydy:|oydN|:+sdMMMmhs+|sNmdyohNNNNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMMMMy.                                                            
                                                               +mMN::|+syds:+shNMo|ohMMMMmyo||mNdys+oNmmmmNNNNNNNNNNNNNNNMMMMMMMMMMMMMMMd:                                                              
                                                                '+m::|+symy:+smMMh|sMMMMMms++mMmhs+|ymdhsosNNNNNNNNNNNMMMMMMMMMMMMMMMMm|                                                                
                                                                  s|:|osdMh:+dMMMN+dMMMMMd+oNMMdyo|+mdhyo+|yMNNNMMMMMMMMMMMMMMMMMMMMd|                                                                  
                                                                  |o:+odMMN|oMMMMMdNMMMMMshMMMMho+|mdhyo+|:hMMMMMMMMMMMMMMMMMMMMMNy-                                                                    
                                                                  .h|+yy+hNohMMMMMMMMMMMmNMMMMNs++mNhyo+|:oMMMMMMMMMMMMMMMMMMMNh|'                                                                      
                                                                   s++d.  :hmNMMMMMMMMMMMMMMMMmoomMNys+|:sMMMMMMMMMMMMMMMMMmy|'                                                                         
                                                                   .hoy    hm'-+ymNMMMMMMMMMMMysNMMms+||hMMMMMMMMMMMMMNmy+.                                                                             
                                                                    |hy    -s     .:+ydNMMMMMmhMMMMho|omMMMMMMMMMmhs+:'                                                                                 
                                                                     ++                 '-:oNhyyydmooyhhyyso+|-.                                                                                        
                                                                                           -|   .hyy|                                                                                                   
                                                                                               'my:                                                                                                     

            
            `}

            </pre>
        </div>
    )
}

export default Hellbat;