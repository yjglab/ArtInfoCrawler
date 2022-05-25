import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.landesmuseum.ch/en/your-visit#%7B%22categoryIds%22:%5B%22-1%22%5D%7D'
exb_nums = 6
titles_selector = ".item-content-title"
dates_selector = ".item-content-text"
thumbnails_selector = ".item-image-wrapper img"
details_links_selector = ".event-item > a"
details_content_selector = ".container-inner .toolbox-element:nth-child(2) > p"
category = "museum"
infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,
    )