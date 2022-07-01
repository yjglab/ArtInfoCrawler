import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.tmbrno.cz/vystavy-a-akce/vystavy/' # no eng
exb_nums = 4
titles_selector = ".events-event-title"
dates_selector = ".events-event-date"
thumbnails_selector = ".events-event-img"
details_links_selector = "meta"
details_content_selector = ".events-event-box > p"
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