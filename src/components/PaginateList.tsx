import { router } from "@inertiajs/react";
import Icon from "./Icon";

const SECOND = 2;
const RENDER_LIMIT = 5;

const ACTIVE = "text-white bg-fuchsia-700";
const INACTIVE = "bg-gray-200 hover:bg-gray-300 transition ease-in-out";

const DISABLED = "opacity-30 bg-gray-200 text-gray-500";
const ENABLED = "bg-gray-200 hover:bg-gray-300 transition ease-in-out";

const PaginateList = ({ currentPage, total }: { currentPage: number; total: number }) => {
    let pageList: Array<number> = [];

    const shouldDisablePreviousBtn = currentPage === 1;
    const shouldDisableNextBtn = total === 1 || currentPage === total;

    if (total <= RENDER_LIMIT) {
        pageList = Array.from({ length: total }, (_, i) => i + 1);
    } else {
        let startIndex = 1;

        if (currentPage === 1) {
            startIndex = 1;
        } else if (currentPage === SECOND) {
            startIndex = SECOND;
        } else if (currentPage === total - 1) {
            // penultimate
            startIndex = total - (RENDER_LIMIT + 1);
        } else if (currentPage === total) {
            // last one
            startIndex = total - RENDER_LIMIT;
        }

        pageList = Array.from({ length: RENDER_LIMIT }, (_, i) => startIndex + i + 1);
    }

    function previousPage() {
        router.reload({ data: { page: currentPage - 1 } });
    }

    function nextPage() {
        router.reload({ data: { page: currentPage + 1 } });
    }

    function goToPage(page: number) {
        router.reload({ data: { page: page } });
    }

    return (
        <div id="pagination" className="fixed bottom-4 right-0 p-6 text-right">
            <button
                type="button"
                onClick={previousPage}
                disabled={shouldDisablePreviousBtn}
                className={`${shouldDisablePreviousBtn ? DISABLED : ENABLED} py-2 px-4 rounded-r align-bottom shadow`}
            >
                <Icon name="chevron-left" color="#000" />
            </button>
            {pageList.map((page: number) => {
                const isActive = page === currentPage;
                return (
                    <button
                        key={page}
                        type="button"
                        onClick={() => goToPage(page)}
                        className={`${isActive ? ACTIVE : INACTIVE} py-2 px-4 border-r border-white shadow`}
                        disabled={isActive}
                    >
                        {page}
                    </button>
                );
            })}
            <button
                type="button"
                onClick={nextPage}
                disabled={shouldDisableNextBtn}
                className={`${shouldDisableNextBtn ? DISABLED : ENABLED} py-2 px-4 rounded-r align-bottom shadow`}
            >
                <Icon name="chevron-right" color="#000" />
            </button>
        </div>
    );
};

export default PaginateList;
