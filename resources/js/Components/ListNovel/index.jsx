import { Link } from '@inertiajs/react';
import React, { useState } from 'react'

const ListNovel = ({myNovels, ...props}) => {
    const [expandedDescriptionId, setExpandedDescriptionId] = useState(null);

    const toggleDescription = (id) => {
        setExpandedDescriptionId(id === expandedDescriptionId ? null : id);
    };
  return (
      <>
          <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="mx-auto py-8 text-center text-2xl font-bold text-white">
                  Novel Yang Anda Tambahkan
              </h3>
              {myNovels.length > 0 ? (
                  myNovels.map((novel, i) => {
                      const isDescriptionExpanded =
                          expandedDescriptionId === novel.id;

                      return (
                          <div
                              className="card mini:card-compact md:card-side my-8 w-full bg-base-100 shadow-xl"
                              key={i}
                          >
                              <figure className="flex max-h-96 md:w-1/3 md:max-w-72 w-full items-center justify-center">
                                  <img
                                      src={"e-book/" + novel.image}
                                      alt={"e-book/" + novel.image}
                                      className="block h-full max-h-96 max-w-full object-cover w-full md:w-96"
                                  />
                              </figure>

                              <div className="card-body md:w-1/3">
                                  <h2 className="card-title">{novel.title}</h2>
                                  <table className="table table-zebra">
                                      <tbody>
                                          <tr>
                                              <td>Deskripsi</td>
                                              <td>
                                                  {isDescriptionExpanded
                                                      ? novel.description
                                                      : `${novel.description.slice(
                                                            0,
                                                            350,
                                                        )}... `}
                                                  <button
                                                      onClick={() =>
                                                          toggleDescription(
                                                              novel.id,
                                                          )
                                                      }
                                                      className="text-blue-500"
                                                  >
                                                      {isDescriptionExpanded
                                                          ? "Sembunyikan"
                                                          : "Selengkapnya..."}
                                                  </button>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>Genre</td>
                                              <td>{novel.genre}</td>
                                          </tr>
                                          <tr>
                                              <td>Penulis</td>
                                              <td>{novel.author}</td>
                                          </tr>
                                          <tr>
                                              <td>Penerjemah</td>
                                              <td>{novel.translator}</td>
                                          </tr>
                                          <tr>
                                              <td>Status</td>
                                              <td>{novel.status}</td>
                                          </tr>
                                      </tbody>
                                  </table>
                                  <div className="card-actions justify-end">
                                      <Link
                                          href={route("novel.delete")}
                                          as="button"
                                          data={{
                                              id: novel.id,
                                          }}
                                          method="post"
                                          className="btn bg-color-primary px-8"
                                      >
                                          Hapus
                                      </Link>
                                      <Link
                                          href={route("novel.edit")}
                                          as="button"
                                          data={{
                                              id: novel.id,
                                          }}
                                          method="get"
                                          className="btn bg-color-primary px-8"
                                      >
                                          Edit
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      );
                  })
              ) : (
                  <p className="pb-16 pt-4 text-center text-lg">
                      Anda belum memiliki novel.
                  </p>
              )}
          </div>
      </>
  );
}

export default ListNovel