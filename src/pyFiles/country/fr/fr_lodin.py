import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler
# ?
url = 'https://www.musee-rodin.fr/musee/expositions'
exb_nums = 1
titles_selector = ".expo .titre"
dates_selector = ".expo .date" 
thumbnails_selector = ".expo picture img"
details_links_selector = ".expo .titre a"
details_content_selector = "#frame_content > div.w1230 > div > div.col-12.col-lg-8.main-col > div > div > div:nth-child(1) > div > div"
infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector,
    details_links_selector,
    details_content_selector,
    )