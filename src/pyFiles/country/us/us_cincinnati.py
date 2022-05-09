import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.cincinnatiartmuseum.org/art/exhibitions/?gclid=Cj0KCQjw3v6SBhCsARIsACyrRAlU8C9ymrvNSV-ts7ZSz3C6QGU7ctlrzUOwSSRAMgeCD2Po5DSI7L0aAsxFEALw_wcB'
exb_nums = 6
titles_selector = ".col-sm-8 h4"
dates_selector = ".col-sm-8 h5"
thumbnails_selector = ".col-sm-4 img"
details_links_selector = ".col-sm-8 p:nth-of-type(2)"
details_content_selector = ""
infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector,
    details_links_selector,
    details_content_selector
    )
