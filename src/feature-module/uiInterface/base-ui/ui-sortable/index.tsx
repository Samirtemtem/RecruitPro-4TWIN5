import SimpleList from "./simple-list";
import SharedList from "./shared-list";
import Cloning from "./cloning";
import DisableSorting from "./disable-sorting";
import SortingHandle from "./sorting-handle";
import SortingFilter from "./sorting-filter";
import SortableGrid from "./sortable-grid";
import NestedSortable from "./nested-sortable";
import MultipleDrag from "./multiple-drag";
import MultipleDragMain from "./multiple-drag";
import SwapDrag from "./swap";

const Sortable = () => {
  return (
    <div>
      <div className="page-wrapper cardhead">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Sortable JS</h3>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Start::row-1 */}
          <div className="row">
            <div className="col-xl-4">
              <div className="card custom-card">
                <div className="card-header">
                  <div className="card-title">SIMPLE LIST</div>
                </div>
                <div className="card-body">
                  <SimpleList />
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="card custom-card">
                <div className="card-header">
                  <div className="card-title">SHARED LISTS</div>
                </div>
                <SharedList />
              </div>
            </div>
          </div>
          {/*End::row-1 */}
          {/* Start:: row-2 */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card custom-card">
                <div className="card-header">
                  <div className="card-title">CLONING</div>
                </div>
                <Cloning />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card custom-card">
                <div className="card-header">
                  <div className="card-title">DISABLING SORTING</div>
                </div>
                <DisableSorting />
              </div>
            </div>
          </div>
          {/* End:: row-2 */}
          {/* Start:: row-3 */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card custom-card">
                <div className="card-header">
                  <div className="card-title">SORTING WITH HANDLE</div>
                </div>
                <SortingHandle />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card custom-card">
                <div className="card-header">
                  <div className="card-title">SORTING WITH FILTER</div>
                </div>
                <SortingFilter />
              </div>
            </div>
          </div>
          {/* End:: row-3 */}
          {/* Start:: row-4 */}
          <div className="row">
            <div className="col-xl-12">
              <div className="card custom-card">
                <div className="card-header">
                  <div className="card-title">SORTABLE GRID</div>
                </div>
                <SortableGrid />
              </div>
            </div>
          </div>
          {/* End:: row-4 */}
          {/* Start:: row-5 */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card custom-card">
                <div className="card-header">
                  <div className="card-title">NESTED SORTABLE</div>
                </div>
                <NestedSortable />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="row">
                <div className="col-xl-12">
                  <div className="card custom-card">
                    <div className="card-header">
                      <div className="card-title">MULTIPLE DRAG</div>
                    </div>
                    <MultipleDrag />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="card custom-card">
                    <div className="card-header">
                      <div className="card-title">SWAP</div>
                    </div>
                    <SwapDrag />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End:: row-5 */}
        </div>
      </div>
    </div>
  );
};

export default Sortable;
