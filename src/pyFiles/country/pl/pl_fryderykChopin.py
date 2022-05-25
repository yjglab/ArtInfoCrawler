import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://muzeum.nifc.pl/en/muzeum/wystawy-czasowe-miejsca-filtrowanie/1_warszawa/obecne'
exb_nums = 1
titles_selector = ".place_name"
dates_selector = ".place_name"
thumbnails_selector = ".vt21-image"
details_links_selector = ".middle-addelem a"
details_content_selector = ".vt22-title-text div:nth-of-type(4)"
category = ""
infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,
    )