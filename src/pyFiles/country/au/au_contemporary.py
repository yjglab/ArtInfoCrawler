import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.mca.com.au/artists-works/?primary=exhibitions'
exb_nums = 2
titles_selector = ".primaryContentColKrXK .titleLink2NG3"
dates_selector = ".primaryContentColKrXK .cont2ppK"
thumbnails_selector = ".primaryContentColKrXK .img1MDP"
details_links_selector = ".primaryContentColKrXK .titleLink2NG3"
details_content_selector = ".descriptionqsBx"
category = "museum"
infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,category
    )   