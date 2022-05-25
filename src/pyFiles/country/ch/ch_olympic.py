import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://olympics.com/museum/explore/programming/temporary-exhibitions'
exb_nums = 1
titles_selector = ".text-block p:nth-of-type(3)"
dates_selector = ".text-block p:nth-of-type(4)"
thumbnails_selector = ".text-block .image img"
details_links_selector = ".text-block .image > a"
details_content_selector = ".text-block p:nth-of-type(2)"
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