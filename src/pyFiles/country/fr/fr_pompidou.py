import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.centrepompidou.fr/en/'
exb_nums = 7
titles_selector = ".card-title"
dates_selector = ".dateEvenement"
thumbnails_selector = ".card-img-wrapper img"
details_links_selector = ".event-card > .card-link"
details_content_selector = ".description-courte p:nth-child(1)"

infoCrawler.print_msm_data(
    url,
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector,
    details_links_selector,
    details_content_selector,
    )