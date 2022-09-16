import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://humanrights.ca/exhibitions-and-events/exhibitions'
exb_nums = 4
titles_selector = ".card__title"
dates_selector = ".paragraph--event-date"
thumbnails_selector = ".photo-card .image source:nth-of-type(1)"
details_links_selector = ".photo-card .card__links a"
details_content_selector = ".wysiwyg-large"
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